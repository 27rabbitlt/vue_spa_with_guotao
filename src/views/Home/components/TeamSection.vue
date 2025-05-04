<template>
  <section id="team" class="team-section">
    <div class="container">
      <div class="team-container">
        <div class="team-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="title team-title text-primary text-7xl font-bold">Meet our Team</h2>
        </div>
        <div class="top-board-container wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <TopBoardMember :avatar="jacob" name="Jacob Anz" role="Founder & CTO"
            linkedin="https://www.linkedin.com/in/jacob-anz-68a67b86/?originalSubdomain=ch"
            bio="Jacob is an entrepreneur and remarkable engineer. He is the founder and lead engineer of E-Ride" />
          <TopBoardMember :avatar="gregNau" name="Greg Nau" role="Co-Founder & CFO"
            linkedin="https://www.linkedin.com/in/rightnau/"
            bio="Gregor is a driven business and finance expert. After pursuing an MBA at the IE Business School in Madrid, he worked as a partner at a boutique auditing and international tax advisory, before deciding to found MPower. Gregor has expertise in finance, accounting & tax, Latin America." />
          <TopBoardMember :avatar="me" name="Michael Eschmann" role="Co-Founder & COO"
            linkedin="https://www.linkedin.com/in/michael-eschmann-0a335942/"
            bio="Michael is a dedicated professional with a passion for impact investing. Also a Johns Hopkins SAIS alumni, he worked for different NGOs and international organizations (FS-UNEP, CAF, Perspectives) before joining MPower. Michael is an expert in sustainable finance, business development, fundraising and Africa." />
          <TopBoardMember :avatar="aj" name="Alejandro Jimenez" role="CTO"
            linkedin="https://www.linkedin.com/in/alejojimenezms/"
            bio="Alejandro is a serial entrepreneur. After completing his degree in Computer Science at the Universidad Militar Nueva Grenada (Colombia) and participating at Y Combinator, he co-founded multiple app-based or educational video games related start-ups. Alejandro is an expert in IT and Software Development." />
        </div>
        <div class="management-team-container wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="title management-team-title text-primary text-4xl font-bold">Management Team</h2>
          <div class="team-members-grid">
            <TeamMember :avatar="carolineNdum" name="Caroline Ndum" role="Finance Director, Cameroon" />
            <TeamMember :avatar="fionaVohryzka" name="Fiona Vohryzka" role="Country Manager, Togo" />
            <TeamMember :avatar="floraCamille" name="Flora Camille KEUGNE" role="Head of HR, Cameroon" />
            <TeamMember :avatar="jamesMacho" name="James Macho" role="Deputy Country Manager, Zambia" />
            <TeamMember :avatar="johannesHertlein" name="Johannes Hertlein" role="Country Manager, Zambia" />
            <TeamMember :avatar="luizaNovita" name="Luiza Novita" role="Head of Marketing and Growth" />
            <TeamMember :avatar="paulNemga" name="Paul Nemga" role="Global Head of Sales" />
            <TeamMember :avatar="paulusFillepus" name="Paulus Fillepus" role="Country Manager, Namibia" />
            <TeamMember :avatar="ravecousMoonga" name="Ravecous Moonga" role="Head of Sales, Zambia" />
            <TeamMember :avatar="robertBitjong" name="Robert Bitjong" role="Country Manager, Cameroon" />
            <TeamMember :avatar="samuelBoateng" name="Samuel K. Boateng" role="Country Manager, Ghana" />
            <TeamMember :avatar="zofeChow" name="Zofe Chow" role="Head of Sourcing, China" />
          </div>
        </div>
        <div class="board-members-container wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="title board-members-title text-primary text-4xl font-bold">Board of Directors</h2>
          <div class="board-members-grid">
            <TeamMember :avatar="renatHeuberger" name="Renat Heuberger" role="Chairman of the Board" />
            <TeamMember :avatar="christianJaag" name="Christian Jaag" role="Board member" />
            <TeamMember :avatar="ladeAraba" name="Ladé Araba" role="Board Member" />
            <TeamMember :avatar="pattyKaruaihe" name="Patty Karuaihe-Martin" role="Board Member" />
            <TeamMember :avatar="zebaAhmad" name="Zeba Ahmad" role="Board member" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBoardMember from '@/components/TopBoardMember.vue'
import TeamMember from '@/components/TeamMember.vue'

// Top Board Members
import jacob from '@/assets/img/team/jacob.jpeg'
import manuelSeiffe from '@/assets/img/team/Manuel-Seiffe.png'
import gregNau from '@/assets/img/team/Greg-Nau.png'
import me from '@/assets/img/team/Michael-Eschmann.png'
import aj from '@/assets/img/team/Alejandro-Jimenez.png'

// Management Team
import carolineNdum from '@/assets/img/team/Caroline-Ndum.png'
import fionaVohryzka from '@/assets/img/team/Fiona-Vohryzka.png'
import floraCamille from '@/assets/img/team/Flora-Camille-KEUGNE.png'
import jamesMacho from '@/assets/img/team/James-Macho.png'
import johannesHertlein from '@/assets/img/team/Johannes-Hertlein.png'
import luizaNovita from '@/assets/img/team/Luiza-Novita.png'
import paulNemga from '@/assets/img/team/Paul-Nemga.png'
import paulusFillepus from '@/assets/img/team/Paulus-Fillepus.png'
import ravecousMoonga from '@/assets/img/team/Ravecous-Moonga.png'
import robertBitjong from '@/assets/img/team/Robert-Bitjong.png'
import samuelBoateng from '@/assets/img/team/Samue-K-Boateng.png'
import zofeChow from '@/assets/img/team/Zofe-Chow.png'

// Board Members
import renatHeuberger from '@/assets/img/team/Renat-Heuberger.png'
import christianJaag from '@/assets/img/team/Christian-Jaag.png'
import ladeAraba from '@/assets/img/team/Lade-Araba.png'
import pattyKaruaihe from '@/assets/img/team/Patty-Karuaihe-Martin.png'
import zebaAhmad from '@/assets/img/team/Zeba-Ahmad.png'
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
}

.top-board-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-auto-columns: 1fr;
  gap: 15px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 40px;
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