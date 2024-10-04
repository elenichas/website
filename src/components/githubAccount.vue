<template>
  <div id="mygraph">
    <h1>
      <a
        href="https://github.com/elenichas"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </a>
    </h1>
    <svg ref="graph" width="1200" height="600"></svg>
    <h6>graph created with d3.js</h6>
  </div>
</template>

<script>
import axios from "axios";
import * as d3 from "d3";

export default {
  name: "GithubGraph",
  data() {
    return {
      githubUsername: "elenichas",
      repos: [],
    };
  },
  mounted() {
    this.checkRateLimit();
    this.fetchGithubData();
  },
  methods: {
    async checkRateLimit() {
      try {
        const response = await axios.get(`https://api.github.com/rate_limit`, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
          },
        });
        console.log("Rate Limit Info:", response.data);
      } catch (error) {
        console.error("Error checking rate limit:", error);
      }
    },

    async fetchGithubData() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${this.githubUsername}/repos`,
          {
            headers: {
              Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
            },
          }
        );
        const repos = response.data;

        const repoDataPromises = repos.map(async (repo) => {
          const commitsResponse = await axios.get(
            `https://api.github.com/repos/${this.githubUsername}/${repo.name}/commits`,
            {
              headers: {
                Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
              },
            }
          );
          return {
            name: repo.name,
            language: repo.language,
            created_at: new Date(repo.created_at),
            commits: commitsResponse.data.length,
            url: repo.html_url, // Add the URL of the repo
          };
        });

        const repoData = await Promise.all(repoDataPromises);
        this.repos = repoData;

        this.createGraph();
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    },
    createGraph() {
      const margin = { top: 50, right: 50, bottom: 50, left: 50 };
      const width = 1200 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      const svg = d3
        .select(this.$refs.graph)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Set x and y scales
      const x = d3
        .scaleTime()
        .domain(d3.extent(this.repos, (d) => d.created_at))
        .range([0, width]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(this.repos, (d) => d.commits)])
        .range([height, 0]);

      // Set color scale based on language
      const color = d3
        .scaleOrdinal(d3.schemeCategory10)
        .domain([...new Set(this.repos.map((d) => d.language))]);

      // Set radius scale based on the number of commits
      const radius = d3
        .scaleSqrt()
        .domain([0, d3.max(this.repos, (d) => d.commits)])
        .range([5, 20]);

      // Add x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .append("text")
        .attr("fill", "#000")
        .attr("x", width / 2)
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .text("Creation Date");

      // Add y-axis
      svg
        .append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("x", -height / 2)
        .attr("y", -40)
        .attr("dy", "0.75em")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Number of Commits");

      // Add circles for each repo
      const circles = svg
        .selectAll("circle")
        .data(this.repos)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.created_at))
        .attr("cy", (d) => y(d.commits))
        .attr("r", (d) => radius(d.commits))
        .attr("fill", (d) => color(d.language))
        .attr("stroke", "#333")
        .attr("stroke-width", 1)
        .on("click", (event, d) => {
          window.open(d.url, "_blank");
        });

      // Tooltip div (HTML element for better positioning)
      // create a tooltip
      var tooltip = d3
        .select("#mygraph")
        .append("div")
        .style("position", "absolute")
        .style("z-index", 100)
        .style("padding", "8px")
        .style("border-radius", "4px")
        .style("pointer-events", "none") // Tooltip won't interfere with mouse events
        .style("font-size", "12px")
        .style("color", "#333");

      circles
        .on("mouseover", function (event, d) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", radius(d.commits) + 5)
            .attr("stroke-width", 2);

          console.log(d.name);
          tooltip
            .style("visibility", "visible")
            .style("opacity", 1)
            .text(d.name);
        })
        .on("mouseout", function (event, d) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", radius(d.commits))
            .attr("stroke-width", 1);

          tooltip.style("visibility", "hidden");
        })
        .on("mousemove", function (event) {
          tooltip
            .style("left", `${event.pageX + 10}px`) // Offset the tooltip by 10px to the right of the cursor
            .style("top", `${event.pageY - 20}px`); // Offset the tooltip by 20px above the cursor
        });

      // Add legend for languages
      const legend = svg
        .selectAll(".legend")
        .data(color.domain())
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(${i * 100},${height + 40})`);

      legend
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", color);

      legend
        .append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "#000") // Set legend text color explicitly to black
        .text((d) => d);
    },
  },
};
</script>

<style scoped>
svg {
  border: 1px solid #ccc;
}

.repo-name {
  font-size: 16px;
  fill: #333;
}

.tooltip {
  position: absolute;
  text-align: center;
  width: 140px;
  padding: 8px;
  background-color: lightsteelblue;
  border: 1px solid #ddd;
  border-radius: 4px;
  pointer-events: none;
  font-size: 12px;
  color: #333;
}
</style>
