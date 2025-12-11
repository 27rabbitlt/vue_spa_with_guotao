<template>
  <section id="team" class="team-section">
    <div class="container">
      <div class="team-container">
        <div class="team-heading wow " data-wow-duration="1s">
          <div class="heading-with-button">
            <h2 class="title team-title text-primary text-7xl font-bold">Meet our Team</h2>
            <button @click="toggleExpand" class="toggle-button">
              <svg v-if="isExpanded" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <transition name="slide-fade">
          <div v-show="isExpanded" class="top-board-container wow " data-wow-duration="1s">
          <TopBoardMember :avatar="camilla" name="Camilla" role="Team Member"
            linkedin="https://www.linkedin.com/in/camilla-chipili/" />
          <TopBoardMember :avatar="chipo" name="Chipo" role="Team Member"
            linkedin="https://www.linkedin.com/in/chipo-chilengwe-a273b6287/?originalSubdomain=zm" />
          <TopBoardMember :avatar="dillon" name="Dillon" role="Team Member"
            linkedin="https://ch.linkedin.com/in/dillon-mulcahy" />
          <TopBoardMember :avatar="jacob" name="Jacob Anz" role="Founder & CTO"
            linkedin="https://www.linkedin.com/in/jacob-anz-68a67b86/?originalSubdomain=ch" />
          <TopBoardMember :avatar="marius" name="Marius" role="Team Member" />
          <TopBoardMember :avatar="milos" name="Milos" role="Team Member" />
          <TopBoardMember :avatar="mumbi" name="Mumbi" role="Team Member"
            linkedin="https://www.linkedin.com/in/mumbi-mukuka-348990144" />
          <TopBoardMember :avatar="phynious" name="Phynious" role="Team Member"
            linkedin="https://zm.linkedin.com/in/phynious-chilufya-481349180" />
          <TopBoardMember :avatar="rodney" name="Rodney" role="Team Member"
            linkedin="https://www.linkedin.com/in/rodney-b-2b5459142/" />
          <TopBoardMember :avatar="teng" name="Teng" role="Team Member"
            linkedin="https://www.linkedin.com/in/teng-liu-03473b223/" />
          </div>
        </transition>
        <!-- <div class="management-team-container wow " data-wow-duration="1s">
          <h2 class="title management-team-title text-primary text-4xl font-bold">Management Team</h2>
          <div class="team-members-grid"> -->
        <!-- <TeamMember :avatar="carolineNdum" name="Caroline Ndum" role="Finance Director, Cameroon" /> -->
        <!-- <TeamMember :avatar="fionaVohryzka" name="Fiona Vohryzka" role="Country Manager, Togo" />
            <TeamMember :avatar="floraCamille" name="Flora Camille KEUGNE" role="Head of HR, Cameroon" />
            <TeamMember :avatar="jamesMacho" name="James Macho" role="Deputy Country Manager, Zambia" />
            <TeamMember :avatar="johannesHertlein" name="Johannes Hertlein" role="Country Manager, Zambia" />
            <TeamMember :avatar="luizaNovita" name="Luiza Novita" role="Head of Marketing and Growth" />
            <TeamMember :avatar="paulNemga" name="Paul Nemga" role="Global Head of Sales" />
            <TeamMember :avatar="paulusFillepus" name="Paulus Fillepus" role="Country Manager, Namibia" />
            <TeamMember :avatar="ravecousMoonga" name="Ravecous Moonga" role="Head of Sales, Zambia" />
            <TeamMember :avatar="robertBitjong" name="Robert Bitjong" role="Country Manager, Cameroon" />
            <TeamMember :avatar="samuelBoateng" name="Samuel K. Boateng" role="Country Manager, Ghana" />
            <TeamMember :avatar="zofeChow" name="Zofe Chow" role="Head of Sourcing, China" /> -->
        <!-- </div>
        </div> -->
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TopBoardMember from '@/components/TopBoardMember.vue'
import TeamMember from '@/components/TeamMember.vue'

// Expand/collapse state
const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

// Top Board Members
import jacob from '@/assets/img/team/Jacob.png'
import camilla from '@/assets/img/team/Camilla.jpg'
import chipo from '@/assets/img/team/Chipo.jpg'
import dillon from '@/assets/img/team/Dillon.png'
import marius from '@/assets/img/team/Marius.png'
import milos from '@/assets/img/team/Milos.png'
import mumbi from '@/assets/img/team/Mumbi.jpg'
import phynious from '@/assets/img/team/Phynious.jpg'
import rodney from '@/assets/img/team/Rodney.jpg'
import teng from '@/assets/img/team/Teng.png'
</script>

<style scoped lang="scss">
.team-section {
  background-color: #ffffff;
}

.team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  gap: 40px;
}

.team-heading {
  text-align: center;
  width: 100%;
}

.heading-with-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #000000;

  &:hover {
    opacity: 0.7;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  .icon {
    width: 24px;
    height: 24px;
  }
}

.top-board-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-auto-columns: 1fr;
  gap: 15px;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 40px;
}

// Transition animations
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.team-members-grid,
.board-members-grid {
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  border-radius: 0;
  flex-wrap: wrap;
  grid-template: ". . . . ."
    ". . . . ."
    ". . . . Area"
    / 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: center;
  place-items: flex-start center;
  min-height: 332px;
  padding-top: 20px;
  display: grid;
}
</style>