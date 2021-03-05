<template>
  <div>
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <SurveyWidget :dataProp="{ eligible: '', title: 'Total Surveys' }" />
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <PendingSurveysWidget :dataProp="{ title: 'Pending Surveys' }" />
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <DisbEligibleWidget :dataProp="{ title: 'DISB Eligible' }" />
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <TotalCbeWidget :dataProp="{ title: 'Total CBEs' }" />
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <SurveyWidget
          :dataProp="{
            eligible: '',
            filterDateParam: 'month',
            title: 'This Month'
          }"
        />
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <SurveyWidget
          :dataProp="{
            eligible: '',
            filterDateParam: 'week',
            title: 'This Week'
          }"
        />
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <SurveyWidget
          :dataProp="{
            eligible: '',
            filterDateParam: 'year',
            title: 'This Year'
          }"
        />
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <SurveyWidget
          :dataProp="{
            eligible: '',
            filterDateParam: 'past30',
            title: 'Past 30 days'
          }"
        />
      </div>
    </div>
    <slot name="survey"></slot>
  </div>
</template>

<script>
import TotalCbeWidget from './widgets/TotalCbeWidget'
import SurveyWidget from './widgets/SurveyWidget'
import DisbEligibleWidget from './widgets/DisbEligibleWidget'
import PendingSurveysWidget from './widgets/PendingSurveysWidget'
export default {
  name: 'SuperAdminDashboard',
  components: {
    SurveyWidget,
    TotalCbeWidget,
    DisbEligibleWidget,
    PendingSurveysWidget
  }
}
</script>
