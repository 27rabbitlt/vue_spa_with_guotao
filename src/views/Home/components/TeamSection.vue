<template>
  <section id="team" class="team-section">
    <div class="container">
      <div class="team-container">
        <div class="team-heading wow " data-wow-duration="1s">
          <h2 class="title team-title text-primary text-7xl font-bold">Meet our Team</h2>
        </div>
        <div class="top-board-container wow " data-wow-duration="1s">
          <TopBoardMember :avatar="placeholderAvatar" name="Camilla" role="Team Member"
            bio="Camilla brings her experience in operations and team management to our organization." />
          <TopBoardMember :avatar="placeholderAvatar" name="Cephas" role="Team Member"
            bio="Cephas contributes his expertise in business development and strategic planning." />
          <TopBoardMember :avatar="placeholderAvatar" name="Dillon" role="Team Member"
            bio="Dillon is a dedicated team member with expertise in sustainable development and community engagement." />
          <TopBoardMember :avatar="jacob" name="Jacob Anz" role="Founder & CTO"
            linkedin="https://www.linkedin.com/in/jacob-anz-68a67b86/?originalSubdomain=ch"
            bio="Jacob is an entrepreneur and remarkable engineer. He is the founder and lead engineer of E-Ride" />
          <TopBoardMember :avatar="placeholderAvatar" name="Marius" role="Team Member"
            bio="Marius is dedicated to advancing sustainable mobility solutions." />
          <TopBoardMember :avatar="placeholderAvatar" name="Mumbi" role="Team Member"
            bio="Mumbi is passionate about creating positive impact in local communities." />
          <TopBoardMember :avatar="placeholderAvatar" name="Phynious" role="Team Member"
            bio="Phynious contributes his technical expertise and innovative thinking to our projects." />
          <TopBoardMember :avatar="placeholderAvatar" name="Teng" role="Team Member"
            bio="Teng brings valuable experience in technology and innovation to our team." />
        </div>
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
import TopBoardMember from '@/components/TopBoardMember.vue'
import TeamMember from '@/components/TeamMember.vue'

// Top Board Members
import jacob from '@/assets/img/team/jacob.jpeg'
import manuelSeiffe from '@/assets/img/team/Manuel-Seiffe.png'
import gregNau from '@/assets/img/team/Greg-Nau.png'
import me from '@/assets/img/team/Michael-Eschmann.png'
import aj from '@/assets/img/team/Alejandro-Jimenez.png'

// Placeholder avatar for new team members
const placeholderAvatar = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0NDQ0NDQyIvPgo8cmVjdCB4PSI2MCIgeT0iMTIwIiB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHJ4PSIxMCIgZmlsbD0iI0NDQ0NDQyIvPgo8L3N2Zz4K'

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
  max-width: 1000px;
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