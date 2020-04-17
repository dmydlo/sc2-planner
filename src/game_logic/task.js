
class Task {
    /**
     * @param {Number} totalFramesRequired - How many frames this task takes to complete
     * @param {Number} startFrame - At which frame the task was started (required for creating events) 
     */
    constructor(totalFramesRequired=0, startFrame=0, id=-1) {
        // Once progress reaches 1, the task is supposed to be removed and the unit ends up idle
        // How much total progress is required
        this.totalFramesRequired = totalFramesRequired
        this.startFrame = startFrame
        this.id = id
        // Automatically set by updateProgress
        this.progress = 0
        this.isCompleted = false
        this.newWorker = null
        this.newUnit = null
        this.newStructure = null
        // Research structures
        this.newUpgrade = null
        // Drone to building, CC to OC, roach to ravager
        this.morphToUnit = null
        // Terran production
        this.isLanding = null
        this.addsTechlab = null
        this.addsReactor = null
        // Workers building stuff
        this.addMineralWorker = null
    }

    /**
     * Updates the progress of the task, once completed, an event will be fired
     * @param {Boolean} hasChrono - If the unit has chronoboost, the task is accelerated by 50%
     */
    updateProgress(hasChrono=false) {
        if (hasChrono) {
            this.progress += 1.5
        } else {
            this.progress += 1
        }
        if (this.progress >= this.totalFramesRequired) {
            this.isCompleted = true
        }
    }
}

export default Task