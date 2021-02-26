<template>
  <div id="dashboard-container">
      <DashboardComponents />
  </div>
</template>

<script>
import DashboardComponents from "./DashboardComponents/NumberCard";
export default {
  name: "dashboard",
  components: {
    DashboardComponents,
  },
  data: () => ({
    driversData: [
      {
        title: "Total Drivers",
        iconcolor: "info",
        icon: "fas fa-user-tie",
        value: "total",
        total: 0,
        number: 0,
      },
      {
        title: "Approved Drivers",
        iconcolor: "green",
        icon: "fas fa-user-check",
        value: "approve",
        total: 0,
        number: 0,
      },
      {
        title: "Blocked Drivers",
        iconcolor: "warning",
        icon: "fas fa-user-slash",
        value: "blocked",
        total: 0,
        number: 0,
      },
      {
        title: "New Drivers",
        iconcolor: "light-green",
        icon: "fas fa-user-plus",
        value: "new",
        total: 0,
        number: 0,
      },
      {
        title: "Incomplete Drivers",
        iconcolor: "error",
        icon: "fas fa-user-times",
        value: "incomplete",
        total: 0,
        number: 0,
      },
    ],
  }),

  methods: {
    // getVehicle() {
    //   const api = this.axios.create({
    //     headers: {
    //       common: {
    //         "Content-Type": "application/json",
    //         "X-API-Key":
    //           "NJjy0LIuZVCPGWjyjfHsYdL9TAQiVZbP:FgXY7PrpLCpeboYy5y5BWQp-KBzaHQJ83p7parhnAGCu0W5XJIQYp7IkkltqHbk-",
    //         Accept: "application/json",
    //       },
    //     },
    //   });
    //   api
    //     .post("https://api.rideos.ai/ride-hail-operations/v1/GetVehicles", {
    //       fleetId: "default",
    //     })
    //     .then(({ data }) => {
    //       const vehcleStatus = {
    //         online: 0,
    //         offline: 0,
    //         onTrip: 0,
    //       };
    //       data["vehicle"].forEach((vehicle) => {
    //         if (vehicle.state.readiness) {
    //           vehcleStatus.online += 1;
    //         }
    //         if (!vehicle.state.readiness) {
    //           vehcleStatus.offline += 1;
    //         }
    //         if (vehicle.state.plan.step.length > 0) {
    //           vehcleStatus.onTrip += 1;
    //         }
    //       });
    //       this.pieChartData.pieChart.series = [
    //         vehcleStatus.online,
    //         vehcleStatus.onTrip,
    //         vehcleStatus.offline,
    //       ];
    //     });
    // },
  },
};
</script>

<style scoped>
#dashboard-container {
  height: auto;
  margin: auto;
  max-width: 100%;
  min-height: 100vh;
}

</style>
