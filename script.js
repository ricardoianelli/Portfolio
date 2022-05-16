import { availableJobs } from "./jobs.js";
import JobWidget from "./JobWidget.js";

const jobElements = document.querySelectorAll("[id^='job']");
var jobWidgets = [];

jobWidgets[0] = new JobWidget(0, availableJobs[0], document.getElementById("job0"), 0, 0);
jobWidgets[1] = new JobWidget(1, availableJobs[1], document.getElementById("job1"), -100, -50);
jobWidgets[2] = new JobWidget(2, availableJobs[2], document.getElementById("job2"), 0, -100);
jobWidgets[3] = new JobWidget(3, availableJobs[3], document.getElementById("job3"), 100, -50);

let prevButton = document.getElementById("prev_job");
prevButton.style.top = "-150px";
prevButton.style.left = "-15px";

let nextButton = document.getElementById("next_job");
nextButton.style.top = "-150px";
nextButton.style.left = "15px";

prevButton.addEventListener('click', event => goToPrevJob());
nextButton.addEventListener('click', event => goToNextJob());

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

function goToNextJob() {
    let lastIndex = jobWidgets.length-1;
    let lastJobPos = jobWidgets[lastIndex].getPos();
    for (let i = lastIndex; i >= 0; i--) {

        let job = jobWidgets[i];
        let nextJob;
        if (i > 0) {
            nextJob = jobWidgets[i-1].getPos()
        }
        else {
            nextJob = lastJobPos;
        }

        job.setPos(nextJob.x, nextJob.y);
    }
};

