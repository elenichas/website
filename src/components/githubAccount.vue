<template>
  <div class="github-container">
    <h2>
      <a
        href="https://github.com/elenichas"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </a>
    </h2>
    <p>Each circle in the graph is a repo, click to find out more!</p>
    <div id="mygraph">
      <div class="svg-container">
        <svg ref="graph"></svg>
      </div>
      <h6>Graph created with d3.js with data from the github API</h6>
    </div>
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
      margin: { top: 50, right: 150, bottom: 50, left: 50 }, // Added right margin to fit the legend
    };
  },
  mounted() {
    this.checkRateLimit();
    this.fetchGithubData();
    this.$nextTick(() => {
      window.addEventListener("resize", this.createGraph); // Add resize event listener after DOM is ready
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.createGraph); // Clean up the event listener
  },
  methods: {
    async checkRateLimit() {
      try {
        const response = await axios.get(`https://api.github.com/rate_limit`, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
          },
        });
        // console.log("Rate Limit Info:", response.data);
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
        // console.log(repos);

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
            url: repo.html_url,
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
      if (!this.$refs.graph) {
        // console.log("no graph!");
        return; // Stop if the SVG element isn't rendered yet
      }
      const containerWidth = this.$refs.graph.parentElement
        ? this.$refs.graph.parentElement.clientWidth
        : 600; // Default width if parent element is not available

      const width = containerWidth - this.margin.left - this.margin.right;
      const height = 500 - this.margin.top - this.margin.bottom;

      // Remove the existing SVG content before re-rendering
      d3.select(this.$refs.graph).selectAll("*").remove();

      const svg = d3
        .select(this.$refs.graph)
        .attr("width", containerWidth)
        .attr("height", height + this.margin.top + this.margin.bottom)
        .append("g")
        .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

      const x = d3
        .scaleTime()
        .domain(d3.extent(this.repos, (d) => d.created_at))
        .range([0, width]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(this.repos, (d) => d.commits)])
        .range([height, 0]);

      const color = d3
        .scaleOrdinal(d3.schemePastel1)
        .domain([...new Set(this.repos.map((d) => d.language))]);

      const radius = d3
        .scaleSqrt()
        .domain([0, d3.max(this.repos, (d) => d.commits)])
        .range([5, 20]);

      // Add X axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      // Add X axis label
      svg
        .append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2 + this.margin.left)
        .attr("y", height + this.margin.top - 10)
        .text("Creation Date");

      // Add Y axis
      svg.append("g").call(d3.axisLeft(y));

      // Add Y axis label
      svg
        .append("text")
        .attr("text-anchor", "end")
        .attr("x", -height / 2 + this.margin.top)
        .attr("y", -this.margin.left + 20)
        .attr("transform", "rotate(-90)")
        .text("Number of Commits");

      // Add circles for repos
      svg
        .selectAll("circle")
        .data(this.repos)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.created_at))
        .attr("cy", (d) => y(d.commits))
        .attr("r", (d) => radius(d.commits))
        .attr("fill", (d) => color(d.language))
        .attr("opacity", 0.6)
        .on("click", (event, d) => {
          window.open(d.url, "_blank");
        })
        .on("mouseover", function (event, d) {
          d3.select(this)
            .attr("stroke", (d) => color(d.language))
            .attr("stroke-width", 2)
            .attr("opacity", 1)
            .attr("r", (d) => radius(d.commits * 4));

          svg
            .append("text")
            .attr("x", x(d.created_at))
            .attr("y", y(d.commits) - radius(d.commits) - 20) // Position above the circle
            .attr("text-anchor", "middle")
            .attr("class", "repo-name")
            .text(d.name);
        })
        .on("mouseout", function () {
          d3.select(this).attr("stroke", null).attr("stroke-width", null);

          // Remove the text on mouseout
          svg.selectAll(".repo-name").remove();
        });

      // Add legend to the right of the graph
      const legend = svg
        .selectAll(".legend")
        .data(color.domain())
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(${width + 20},${i * 20})`); // Adjust translation for legend

      legend
        .append("rect")
        .attr("x", 0)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

      legend
        .append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text((d) => d || "Unknown Language");
    },
  },
};
</script>

<style scoped>
.github-container {
  margin-top: 40px;
  width: 100%;
  height: auto;
}

#mygraph {
  margin-top: 24px;
  fill: black;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 12px;
}

.svg-container {
  height: 100%;
  padding: 8px;
}

h2 {
  font-size: 2rem;
  color: #000000;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .github-container {
    margin-top: 20px;
    width: 100vw;
    height: auto; /* Let height adjust in mobile view */
  }

  #mygraph {
    width: 100vw;
    overflow-x: auto;
    overflow-y: auto;
  }

  .svg-container {
    width: 800px;
  }
}

@media (max-width: 480px) {
  .github-container {
    margin-top: 20px;
    width: 100vw;
    height: auto; /* Let height adjust in mobile view */
  }

  #mygraph {
    width: 100vw;
    overflow-x: auto;
    overflow-y: auto;
  }

  .svg-container {
    width: 800px;
  }
}

@media (max-width: 320px) {
  .github-container {
    margin-top: 20px;
    width: 100vw;
    height: auto; /* Let height adjust in mobile view */
  }

  #mygraph {
    width: 100vw;
    overflow-x: auto;
    overflow-y: auto;
  }

  .svg-container {
    width: 800px;
  }
}
</style>
