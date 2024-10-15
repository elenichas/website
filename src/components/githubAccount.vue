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
    <p>Click on the graph to see the repo in github account!</p>
    <div class="svg-container">
      <svg ref="graph"></svg>
    </div>
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
      margin: { top: 50, right: 50, bottom: 50, left: 50 },
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
        console.log("no graph!");
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
        .scaleOrdinal(d3.schemeCategory10)
        .domain([...new Set(this.repos.map((d) => d.language))]);

      const radius = d3
        .scaleSqrt()
        .domain([0, d3.max(this.repos, (d) => d.commits)])
        .range([5, 20]);

      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append("g").call(d3.axisLeft(y));

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
    },
  },
};
</script>

<style scoped>
#mygraph {
  width: 85%;
  margin: auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin: 2% 0;
}

.svg-container {
  width: 100%;
  overflow: hidden;
}

svg {
  background: #f5f5f5;
}

@media (max-width: 768px) {
  h1 {
    font-size: 18px;
  }
  h6 {
    font-size: 12px;
  }
}
</style>
