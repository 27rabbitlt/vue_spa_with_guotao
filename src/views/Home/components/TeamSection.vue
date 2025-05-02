<template>
  <section id="team" class="team-section">
    <div class="container">
      <div class="team-container">
        <div class="team-heading">
          <h2 class="team-title text-primary text-7xl font-bold">Meet our Team</h2>
        </div>
        <div class="top-board-container">
          <TopBoardMember avatar="src/assets/img/team/Manuel-Seiffe.png" name="Manuel Seiffe" role="Co-Founder & CEO"
            linkedin="https://www.linkedin.cn/incareer/in/manuelseiffe/"
            bio="Manuel is an entrepreneur and renewable energy enthusiast. After an M.A at Johns Hopkins SAIS, Manuel worked extensively in the solar sector (Yingli Solar, Q-Cells), as well as for Deutsche Bank. Together with Michael and Greg, they founded MPower in 2017. His expertise includes solar, strategy, business development and Africa." />
          <TopBoardMember avatar="src/assets/img/team/Greg-Nau.png" name="Greg Nau" role="Co-Founder & CFO"
            linkedin="https://www.linkedin.com/in/rightnau/"
            bio="Gregor is a driven business and finance expert. After pursuing an MBA at the IE Business School in Madrid, he worked as a partner at a boutique auditing and international tax advisory, before deciding to found MPower. Gregor has expertise in finance, accounting & tax, Latin America." />
          <TopBoardMember avatar="src/assets/img/team/Michael-Eschmann.png" name="Michael Eschmann"
            role="Co-Founder & COO" linkedin="https://www.linkedin.com/in/michael-eschmann-0a335942/"
            bio="Michael is a dedicated professional with a passion for impact investing. Also a Johns Hopkins SAIS alumni, he worked for different NGOs and international organizations (FS-UNEP, CAF, Perspectives) before joining MPower. Michael is an expert in sustainable finance, business development, fundraising and Africa." />
          <TopBoardMember avatar="src/assets/img/team/Alejandro-Jimenez.png" name="Alejandro Jimenez" role="CTO"
            linkedin="https://www.linkedin.com/in/alejojimenezms/"
            bio="Alejandro is a serial entrepreneur. After completing his degree in Computer Science at the Universidad Militar Nueva Grenada (Colombia) and participating at Y Combinator, he co-founded multiple app-based or educational video games related start-ups. Alejandro is an expert in IT and Software Development." />
        </div>
        <div class="management-team-container">
          <h2 class="management-team-title text-primary text-4xl font-bold">Management Team</h2>
          <div class="team-members-grid">
            <TeamMember avatar="src/assets/img/team/Caroline-Ndum.png" name="Caroline Ndum"
              role="Finance Director, Cameroon" />
            <TeamMember avatar="src/assets/img/team/Fiona-Vohryzka.png" name="Fiona Vohryzka"
              role="Country Manager, Togo" />
            <TeamMember avatar="src/assets/img/team/Flora-Camille-KEUGNE.png" name="Flora Camille KEUGNE"
              role="Head of HR, Cameroon" />
            <TeamMember avatar="src/assets/img/team/James-Macho.png" name="James Macho"
              role="Deputy Country Manager, Zambia" />
            <TeamMember avatar="src/assets/img/team/Johannes-Hertlein.png" name="Johannes Hertlein"
              role="Country Manager, Zambia" />
            <TeamMember avatar="src/assets/img/team/Luiza-Novita.png" name="Luiza Novita"
              role="Head of Marketing and Growth" />
            <TeamMember avatar="src/assets/img/team/Paul-Nemga.png" name="Paul Nemga" role="Global Head of Sales" />
            <TeamMember avatar="src/assets/img/team/Paulus-Fillepus.png" name="Paulus Fillepus"
              role="Country Manager, Namibia" />
            <TeamMember avatar="src/assets/img/team/Ravecous-Moonga.png" name="Ravecous Moonga"
              role="Head of Sales, Zambia" />
            <TeamMember avatar="src/assets/img/team/Robert-Bitjong.png" name="Robert Bitjong"
              role="Country Manager, Cameroon" />
            <TeamMember avatar="src/assets/img/team/Samue-K-Boateng.png" name="Samuel K. Boateng"
              role="Country Manager, Ghana" />
            <TeamMember avatar="src/assets/img/team/Zofe-Chow.png" name="Zofe Chow" role="Head of Sourcing, China" />
          </div>
        </div>
        <div class="board-members-container">
          <h2 class="board-members-title text-primary text-4xl font-bold">Board of Directors</h2>
          <div class="board-members-grid">
            <TeamMember avatar="src/assets/img/team/Renat-Heuberger.png" name="Renat Heuberger"
              role="Chairman of the Board" />
            <TeamMember avatar="src/assets/img/team/Christian-Jaag.png" name="Christian Jaag" role="Board member" />
            <TeamMember avatar="src/assets/img/team/Lade-Araba.png" name="Ladé Araba" role="Board Member" />
            <TeamMember avatar="src/assets/img/team/Patty-Karuaihe-Martin.png" name="Patty Karuaihe-Martin"
              role="Board Member" />
            <TeamMember avatar="src/assets/img/team/Zeba-Ahmad.png" name="Zeba Ahmad" role="Board member" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBoardMember from '@/components/TopBoardMember.vue'
import TeamMember from '@/components/TeamMember.vue'
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