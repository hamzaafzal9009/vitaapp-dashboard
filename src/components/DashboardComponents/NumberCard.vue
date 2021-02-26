<template>
  <el-row :gutter="20">
    <el-col :sm="24" :md="5" v-for="card in driversData" :key="card.title">
      <el-card class="box-card clickable" shadow="hover">
        <el-row>
          <el-col :span="16">
            <div class="o-card-title-3">
              {{ card.title }}
            </div>
            <div class="o-card-data" v-show="!showLoading">
              {{ card.number }}
            </div>
            <div class="dashboard-row dashboard-loader" v-show="showLoading">
              <i class="el-icon-loading"></i>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="o-card-icon" :class="[card.iconcolor]">
              <i :class="card.icon"></i>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore();
const driverRef = db.collection("drivers");
export default {
  name: "numbersCard",
  data: () => ({
    driversData: [
      {
        title: "Total Drivers",
        iconcolor: "color-primary",
        icon: "fas fa-user-tie",
        value: "total",
        total: 0,
        number: 0,
      },
      {
        title: "Approved Drivers",
        iconcolor: "color-success",
        icon: "fas fa-user-check",
        value: "approve",
        total: 0,
        number: 0,
      },
      {
        title: "Blocked Drivers",
        iconcolor: "color-danger",
        icon: "fas fa-user-slash",
        value: "blocked",
        total: 0,
        number: 0,
      },
      {
        title: "New Drivers",
        iconcolor: "color-info",
        icon: "fas fa-user-plus",
        value: "new",
        total: 0,
        number: 0,
      },
      {
        title: "Incomplete Drivers",
        iconcolor: "color-warning",
        icon: "fas fa-user-times",
        value: "incomplete",
        total: 0,
        number: 0,
      },
    ],
    showLoading: false,
  }),
  created() {
    this.getDrivers();
  },
  methods: {
    getDrivers() {
      this.showLoading = true;
      driverRef.get().then((data) => {
        const drivers = data.docs.filter((x) => x.data().driverId);
        const totalDrivers = drivers.length;
        const driverCounts = {
          total: totalDrivers,
          approve: 0,
          blocked: 0,
          new: 0,
          incomplete: 0,
        };
        drivers.forEach((driver) => {
          const driverData = driver.data();
          if (
            driverData.isBlocked === "true" ||
            driverData.isBlocked === true
          ) {
            driverCounts.blocked += 1;
          } else {
            if (driverData.driverStatus === "confirmed") {
              driverCounts.approve += 1;
            }
            if (driverData.driverStatus === "pending") {
              driverCounts.new += 1;
            }
            if (
              driverData.driverStatus === "incomplete" ||
              typeof driverData.driverStatus === "undefined"
            ) {
              driverCounts.incomplete += 1;
            }
          }
        });
        this.driversData.forEach((obj) => {
          (obj.number = driverCounts[obj.value]),
            (obj.total = obj.value === "total" ? 0 : totalDrivers);
        });

        this.showLoading = false;
      });
    },
  },
};
</script>

<style scoped>
.el-row--flex {
  flex-direction: row;
}
.text-center {
  text-align: center;
}
.el-card__body {
  padding: 0 15px !important;
}
.color-primary{
  color: #1976d2
}
.color-info{
  color: #909399
}
.color-warning{
  color: #E6A23C
}
.color-success{
  color: #67C23A
}
.color-danger{
  color: #F56C6C
}

@media only screen and (min-width: 992px) {
  .el-col-md-5 {
    width: 19.83333%;
  }
}
</style>
