<template>
  <div>
    <div class="container-fluid home-banner">
      <!-- add url to featured courses here -->
      <div id="demo" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ul class="carousel-indicators">
          <template v-for="course in featured_courses">
              <template v-if="course.id == 0">
                <li data-target="#demo" v-bind:data-slide-to="course.id" class="active"></li>
              </template>
              <template v-else>
                <li data-target="#demo" v-bind:data-slide-to="course.id"></li>
              </template>
          </template> 
        </ul>

        <!-- The slideshow -->
        <div class="carousel-inner">
          <template v-for="course in featured_courses">
            <template v-if="course.id == 0">
              <div class="carousel-item active">
                <router-link :to="{path: '/course/'+course.id }">
                  <img class="img-responsive" v-bind:src="course.media_url"/>
                  <div class="carousel-caption">
                    <h3>{{course.name}}</h3>
                  </div> 
                </router-link>
              </div>
            </template>
            <template v-else>
              <div class="carousel-item">
                <router-link :to="{path: '/course/'+course.id }">
                  <img class="img-responsive" v-bind:src="course.media_url"/>
                  <div class="carousel-caption">
                    <h3>{{course.name}}</h3>
                  </div>
                </router-link>
              </div>
            </template>
          </template>
        </div>

        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>

      </div>
    </div>

    <!-- course listings here -->

    <div class="available-courses container">
      <hr />
      <h2>Available Courses</h2>


      <div class="row">
        <template v-for="course in available_courses">
          <div class="col-sm-4 col-md-4">
            <router-link :to="{path: '/course/'+ course.id }">
              <!-- have an image -->
              <!-- name -->
              <img  class="img-responsive single-image" v-bind:src="course.media_url" />
              <div class="single-course-info">
                <p>{{ course.name }}</p>
              </div>
            </router-link>
          </div>  
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HomePage',
  data() {
    return {
      featured_courses: [],
      available_courses: []
    };
  },
  mounted: function() {
    // fetch data from the server
    axios.get('http://localhost:3128/courses').
    then( result => {
      this.featured_courses = result.data.featured_courses;
      this.available_courses = result.data.available_courses;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.home-banner {
  height: 400px;
  margin-top: 60px;
}

.carousel,
.carousel-inner,
.carousel-item {
  height: 100%;
}

.single-image {
  width: 100%;
  height: 200px;
}
</style>
