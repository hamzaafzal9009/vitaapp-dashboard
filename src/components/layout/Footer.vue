<template>
    <div id="app-footer">
        <div class="footer-links">
          
        </div>
        <a><img width="90px" src="../../assets/img/logo.png" @click="$router.push('/dashboard')" alt="logo"></a>
        <div class="all-rights">© {{currentYear}} Viteapp. All Rights Reserved.</div>
    </div>
</template>
<script>
export default {
    name: 'appFooter',
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    },
    methods: {
    }
}
</script>
<style scoped>
#app-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    max-width: 100%;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    height: var(--footer-height);
}
#app-footer img {
    cursor: pointer;
    padding-right: 50%;
}
.all-rights {
    color: #252422;
    font-size: 12px;
}
</style>