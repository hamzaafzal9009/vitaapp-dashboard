<template>
    <el-dialog
        class="first-login-modal"
        width="800px"
        center
        title="See what's new!"
        :visible.sync="firstLoginModalOpen"
        :show-close="true"
        :before-close="closeModal">
        <div class="first-login-body">
            <div class="feature-step" v-for="(feature, index) in features" :key="index">
                <div class="img-container" v-show="index == activeStep">
                    <img :src="feature.src" height="100%" :alt="feature.title">
                </div>
                <div v-show="index == activeStep" class="feature-title">{{feature.title}}</div>
                <div v-show="index == activeStep" class="feature-description">{{feature.description}}</div>
            </div>
            <el-divider></el-divider>
            <div class="first-login-footer">
                <div class="button-container">
                    <el-button v-if="activeStep != 0" type="text" @click="backStep()">Back</el-button>
                    <el-button v-else-if="activeStep == 0" type="text" @click="closeModal()">Skip & CLose</el-button>
                </div>
                <div class="ellipse-container">
                    <div :class="['ellipse', {'is-active': index === activeStep}]" v-for="(feature, index) in features" :key="index" @click="goToStep(index)"></div>
                </div>
                <div class="button-container">
                    <el-button v-if="activeStep < 9" type="primary" @click="nextStep()">Next</el-button>
                    <el-button v-if="activeStep == 9" type="primary" @click="closeModal()">Finish</el-button>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'firstLoginModal',
    data () {
        return {
            firstLoginModalOpen: true,
            activeStep: 0,
            features: [
                { // 1
                    title: 'Opiniion Dashboard',
                    src: require('../assets/img/features-new/slide-1.png'),
                    description: 'An all-new dashboard! This is your battle station. Get powerful insights into your online reputation and dive deeper to learn more. Use the data to make decisions to improve your business.'
                },
                { // 2
                    title: 'Feedback and Follow-up',
                    src: require('../assets/img/features-new/slide-2.png'),
                    description: 'View public reviews and private feedback all in one place. Respond to public reviews within the app, get right to the source, or follow-up with private feedback via text/email. Leverage our new, dynamic search filters to find exactly what you need to see. '
                },
                { // 3
                    title: 'Customer Management',
                    src: require('../assets/img/features-new/slide-3.png'),
                    description: 'Manually add customers to increase the pool of contacts to ask for reviews. View their ratings, and don’t forget to add tags! With tags you can schedule campaigns to target very specific audiences; such as those who attended a certain event, have pets, or received service from a particular staff member.'
                },
                { // 4
                    title: 'User Management',
                    src: require('../assets/img/features-new/slide-4.png'),
                    description: 'Remember that time we hid Users under the profile icon? Turns out it was more annoying than efficient, so we’ve moved it back to your main navigation ☺. Here is where you’ll add and remove users, assign them to locations, give them roles, and choose what emails they should receive from Opiniion.'
                },
                { // 5
                    title: 'Campaigns',
                    src: require('../assets/img/features-new/slide-5.png'),
                    description: 'Campaigns are the foundation of Opiniion. It’s how everything works, and now you can see it working and have full customization, in addition to some new options. The next five slides will walk you through Campaigns, some tips and tricks, and then we’ll be out of your way and back to generating you reviews!'
                },
                { // 6
                    title: 'Campaigns (Continued)',
                    src: require('../assets/img/features-new/slide-6.png'),
                    description: 'Campaigns are already running for you and will begin by default with every location you add. See which campaigns are active, have already been sent, or add your own. Select a campaign to see analytics. Pause your campaigns if necessary, to work through a bad experience you might have created, then re-active or wait a few days and it will auto-activate again to keep getting you reviews.'
                },
                { // 7
                    title: 'Campaigns: Setup',
                    src: require('../assets/img/features-new/slide-7.png'),
                    description: 'Add your own Campaigns to request reviews from the customers you’d like to. You can send your review requests immediately, schedule them for another day, or even make them recurring; such as weekly or quarterly. '
                },
                { // 8
                    title: 'Campaigns: Audience',
                    src: require('../assets/img/features-new/slide-8.png'),
                    description: 'Target your campaigns to reach the customers you want more feedback from, and drive them to write you a public review. Target the ones who already left you a specific rating, such as those who gave you a 1-star, and ask again to see if you’ve improved. Remember how we suggested adding tags to your customers? This is where you can target customers having one or more tags, such as “Dog Owners” to get relevant feedback from only them.'
                },
                { // 9
                    title: 'Campaigns: Customize',
                    src: require('../assets/img/features-new/slide-9.png'),
                    description: 'Campaigns are now customizable so you can tailor the message to better fit your audience or purpose for requesting a review. Want to know how your customers would rate a special event or holiday party? You’ll not only get great feedback but still send those having a positive experience to write you a public review.'
                },
                { // 10
                    title: 'Campaigns: Distribution',
                    src: require('../assets/img/features-new/slide-10.png'),
                    description: 'Take complete control of where your customers are writing you reviews. Choose to send all public reviews to one source, favor another, or distribute them evenly. If you don’t want to send them public just yet, select “Make Private” and handle all feedback internally only.'
                },
            ]
        }
    },
    methods: {
        goToStep(index) {
            this.activeStep = index;
        },
        nextStep() {
            if (this.features.length != this.activeStep) {
                this.activeStep++;
            } else if (this.activeStep == 9) {
                this.closeModal();
            }
        },
        backStep() {
            if (this.activeStep != 0) {
                this.activeStep--;
            } else {
                this.activeStep;
            }
        },
        closeModal () {
            this.firstLoginModalOpen = false;
            this.$emit('close');
        },
    }
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .25s ease;
}
.slide-fade-leave-active {
  transition: all .35s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.first-login-modal {
    /* animation: slideFadeFromTop 1s cubic-bezier(1.0, 0.5, 0.8, 1.0); turned off animation it was causing delay at modal close */
}
.img-container {
    display: block;
    width: 600px;
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 20px;
    border: 1px solid #9a9a9a;
}
.img-container img {
    animation: slideFadeFromTop .35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    width: 100%;
    max-height: 400px;
}
.feature-title {
    width: 100%;
    text-align: center;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    color: #757575;
    margin-top: 15px;
    margin-bottom: 10px;
}
.feature-description {
    width: 600px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    word-break: keep-all;
    font-size: 14px;
    color: #757575;
    line-height: 1.6;
}
.first-login-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
}
.button-container .el-button {
    width: 100px;
    max-width: 100%;
    min-width: 80px;
}
.ellipse-container {
    display: flex;
    justify-content: space-between;
    width: 180px;
}
.ellipse {
    display: flex;
    justify-content: space-between;
    width: 10px;
    height: 10px;
    background: #f2f2f2;
    border-radius: 100px;
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.ellipse:hover {
    transform: scale(1.5, 1.5);
    background: var(--opiniionblue);
    cursor: pointer;
}
.ellipse.is-active {
    background: var(--opiniionblue);
}
</style>