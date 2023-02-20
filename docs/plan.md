---
layout:page
---

<script setup>
import PlanComp from './components/plan.vue'
</script>

<PlanComp/>

<style>
  @media (min-width: 960px){
   .VPDoc:not(.has-sidebar) .container{
      max-width:none !important
  }
  }
 @media (min-width: 960px){
  .VPDoc:not(.has-sidebar) .content{
     max-width:none !important
  }
 }
.VPDoc.has-aside .content-container{
  max-width:none !important
}
.VPDoc .aside{
  display:none !important
}

</style>
