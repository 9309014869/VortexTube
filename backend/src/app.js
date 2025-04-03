import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

app.use(
    cors({
        origin: https://vortextube-frontend.onrender.com,//http://localhost:5173
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    })
);


app.use(express.urlencoded({ extended: true, limit: "90mb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); 
app.use(express.json());

//routes import

import userRouter from "./routes/user.routes.js";
import commentRouter from "./routes/comment.routes.js";
import likeRouter from "./routes/like.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import videoRouter from "./routes/video.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";

import dislikeRouter from "./routes/dislike.routes.js"
//routes declaration
console.log("i am nice here")
app.use("/api/v1/users", userRouter);//http://localhost:8000/api/v1/users/login
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/tweet", tweetRouter);
app.use("/api/v1/video", videoRouter);
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/dislike", dislikeRouter);


export default app;
