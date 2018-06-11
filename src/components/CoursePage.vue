<template>
  <div>
    <div class="container-fluid home-banner">
      <!-- add url to featured courses here -->
      <template v-if="video_selected == false">
        <img v-bind:src="course_data.media_url" class="course-image" v-bind:alt="course_data.name">
      </template>
      <!-- when a user then clicks a video the video player is displayed -->
      <div v-bind:class="{ hidden: !video_selected, 'video-area' : video_selected }">
        <video id="course-player"  autoplay controls class="cld-video-player cld-video-player-skin-light" ></video>
      </div>
    </div>

    <!-- details about the course will be shown here -->
    <div class="video-listing container">
      <template v-if="video_selected">
        <h2>Now Playing, Lesson #{{ selected_video.id }} : {{ selected_video.title }}</h2>
      </template>
      <hr />
      <h2> {{ course_data.name }} <br ><em>Lessons</em></h2>

      <template v-for="lesson in course_data.lessons">
        <div class="row lesson-detail" v-on:click="displayVideo(lesson)">
          <div class="col-sm-12">
            <em>Lesson #{{lesson.id}}</em>
            <h3>{{ lesson.title }}</h3>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "CoursePage",
  data() {
    return {
      tag: '',
      course_data: {},
      video_selected: false,
      selected_video: {}
    };
  },
  mounted : function(){
    axios.get(`http://localhost:3128/courses/${this.$route.params.id}`)
    .then(res => {
      this.course_data = res.data.course_data;
      var cld = cloudinary.Cloudinary.new({ cloud_name: "demo", secure: true });
      var demoplayer = cld.videoPlayer("course-player", {
        transformation: { crop: "limit", width: 200 }
      });
      
      demoplayer.playlist(this.course_data.lessons_media, { autoAdvance: true, repeat: true, presentUpcoming: 8 });
    });
  },
  methods: {
    displayVideo: function(lesson) {
      this.selected_video = lesson;
      this.video_selected = true;


    }
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
  display: flex;
  justify-content: center;
  padding-right: 0px;
  padding-left: 0px;
}

.course-image {
  height: 100%;
  margin-top : 20px;
}

.video-area, #course-player{
  width: 100%;
}

.lesson-detail {
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  box-shadow: 0.5px 0.5px 0.5px;
}
.cld-video-player{
  height : 100%;
}
.hidden{
  display : none;
}
</style>
