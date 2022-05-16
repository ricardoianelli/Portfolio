import { availableJobs } from "./jobs.js";
import JobWidget from "./JobWidget.js";

const jobsContainer = document.querySelector("#jobs_container");

var jobWidgets = [];
let jobImgSize = {width: 18, height: 38}
let containerSize = {width: jobsContainer.offsetWidth, height: jobsContainer.offsetHeight};

jobWidgets[0] = new JobWidget(0, availableJobs[0], document.getElementById("job0"), containerSize.width*0.5 - jobImgSize.width/2, containerSize.height*0.5 - jobImgSize.height/2);
jobWidgets[1] = new JobWidget(1, availableJobs[1], document.getElementById("job1"), containerSize.width*0.4 - jobImgSize.width/2, containerSize.height*0.4 - jobImgSize.height/2);
jobWidgets[2] = new JobWidget(2, availableJobs[2], document.getElementById("job2"), containerSize.width*0.5 - jobImgSize.width/2, containerSize.height*0.3 - jobImgSize.height/2);
jobWidgets[3] = new JobWidget(3, availableJobs[3], document.getElementById("job3"), containerSize.width*0.6 - jobImgSize.width/2, containerSize.height*0.4 - jobImgSize.height/2);

let prevButton = document.getElementById("prev_job");
prevButton.style.left = "45%";

let nextButton = document.getElementById("next_job");
nextButton.style.left =  "55%";

prevButton.addEventListener('click', goToPrevJob);
nextButton.addEventListener('click', goToNextJob);

function goToPrevJob() {
    let currentJobPos = jobWidgets[0].getPos();

    for (let i = 0; i < jobWidgets.length; i++) {
        let job = jobWidgets[i];
        let prevJob;
        if (i < jobWidgets.length-1) {
            prevJob = jobWidgets[i+1].getPos()
        }
        else {
            prevJob = currentJobPos;
        }

        job.setPos(prevJob.x, prevJob.y);
    }
};

function goToNextJob(e) {
    let lastIndex = jobWidgets.length-1;
    let lastJobPos = jobWidgets[0].getPos();
    let nextJobPos = jobWidgets[1].getPos();

    jobWidgets[0].setPos(nextJobPos.x, nextJobPos.y);
    
    // for (let i = lastIndex; i >= 0; i--) {

    //     let job = jobWidgets[i];
    //     let nextJob;
    //     if (i > 0) {
    //         nextJob = jobWidgets[i-1].getPos()
    //     }
    //     else {
    //         nextJob = lastJobPos;
    //     }

    //     job.setPos(nextJob.x, nextJob.y);
    // }
};