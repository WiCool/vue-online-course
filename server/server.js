// -------------------------------------
// Import Node Modules
// -------------------------------------

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

// ------------------------------------
// Create express app
// ------------------------------------

const app = express();

// -------------------------------------
// Load the middlewares
// -------------------------------------

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ------------------------------------
// Create app routes
// ------------------------------------

app.get("/courses/:id", function (req, res) {
  return res.json({
    course_data: {
      name: "Getting Started with Vim",
      media_url:
        "https://laracasts.com/images/series/squares/vim-mastery.jpg",
      lessons: [
        {
          id: "0",
          title: "Installation",
          media_url:
            "http://res.cloudinary.com/og-tech/video/upload/s--ZWPqo282--/v1514966645/sea_turtle-short_z1pr4o.mp4"
        },
        {
          id: "1",
          title: "Configuring on Mac/*nix",
          media_url:
            "http://res.cloudinary.com/og-tech/video/upload/s--ZWPqo282--/v1514966645/sea_turtle-short_z1pr4o.mp4"
        },
        {
          id: "2",
          title: "Navigation in Vim",
          media_url:
            "http://res.cloudinary.com/og-tech/video/upload/s--ZWPqo282--/v1514966645/sea_turtle-short_z1pr4o.mp4"
        },
        {
          id: "3",
          title: "Exiting Vim!",
          media_url:
            "http://res.cloudinary.com/og-tech/video/upload/s--ZWPqo282--/v1514966645/sea_turtle-short_z1pr4o.mp4"
        }
      ],
      lessons_media: [
        "http://res.cloudinary.com/og-tech/video/upload/s--ZWPqo282--/v1514966645/sea_turtle-short_z1pr4o.mp4",
        "http://res.cloudinary.com/og-tech/video/upload/s--cXj-5WSi--/v1514967202/marmot-short_xaupj5.mp4",
        "http://res.cloudinary.com/og-tech/video/upload/s--RQhNL9jU--/v1514967205/race_dirt_bike_ibhhk7.mp4",
        "http://res.cloudinary.com/og-tech/video/upload/s--ZsRRinOT--/v1514967210/race_finish-short_uv7het.mp4"
      ]
    }
  });
});

app.get('/courses', function (req, res) {
  // display the page for the product
  return res.json({
    featured_courses: [
      {
        id: "0",
        name: "Getting Started with Vim",
        media_url:
          "https://laracasts.com/images/series/squares/vim-mastery.jpg"
      }
    ],
    available_courses: [
      {
        id: "0",
        name: "Getting Started with Vim",
        media_url:
          "https://laracasts.com/images/series/squares/vim-mastery.jpg"
      },
      {
        id: "1",
        name: "Getting Started with Vue",
        media_url: "https://www.w3schools.com/bootstrap4/la.jpg"
      }
    ]
  });
});

// ------------------------------------
// Set port
// ------------------------------------

let port = 3128 || process.env.PORT;

app.listen(port, function() {
  console.log("App listening on port " + port + "!");
});
