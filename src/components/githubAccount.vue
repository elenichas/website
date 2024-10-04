<template>
  <div>
    <h1>GitHub Repositories Overview</h1>
    <svg ref="graph" width="800" height="500"></svg>
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
    this.fetchGithubData();
  },
  methods: {
    async fetchGithubData() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${this.githubUsername}/repos?per_page=100`
        );
        const repos = response.data;

        const repoDataPromises = repos.map(async (repo) => {
          const commitsResponse = await axios.get(
            `https://api.github.com/repos/${this.githubUsername}/${repo.name}/commits`
          );
          return {
            name: repo.name,
            language: repo.language,
            created_at: new Date(repo.created_at),
            commits: commitsResponse.data.length,
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
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const width = 800 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      const svg = d3
        .select(this.$refs.graph)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Parse date
      const parseDate = d3.timeParse("%Y-%m-%d");

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

      // Add x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      // Add y-axis
      svg.append("g").call(d3.axisLeft(y));

      // Add circles for each repo
      svg
        .selectAll("circle")
        .data(this.repos)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.created_at))
        .attr("cy", (d) => y(d.commits))
        .attr("r", 5)
        .attr("fill", (d) => color(d.language))
        .attr("stroke", "#333")
        .attr("stroke-width", 1)
        .on("mouseover", function (event, d) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", 10)
            .attr("stroke-width", 2);
        })
        .on("mouseout", function (event, d) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", 5)
            .attr("stroke-width", 1);
        });
    },
  },
};
</script>

<style scoped>
svg {
  border: 1px solid #ccc;
}
</style>
