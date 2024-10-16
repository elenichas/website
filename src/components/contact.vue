<template>
  <div class="contact-section">
    <p class="contact-info">Get in touch at</p>
    <h1 class="email">eleni.chasioti.19@alumni.ucl.ac.uk</h1>
    <div class="button-container">
      <a
        href="mailto:eleni.chasioti.19@alumni.ucl.ac.uk"
        class="contact-button"
      >
        Contact Me
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
.contact-section {
  text-align: center;
  margin-top: 50px;
  color: #333;
  padding-bottom: 2%;
}

.button-container {
  padding: 20px;
}
.contact-info {
  font-size: 1.2em;
  color: #555;
}

.wave {
  margin-right: 5px;
}

.email {
  font-size: 2.5em;
  font-weight: bold;
  color: #000;
  margin: 10px 0;
}

.contact-button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #555;
}

.divider {
  margin-top: 40px;
  border: none;
  border-bottom: 2px solid #333;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
