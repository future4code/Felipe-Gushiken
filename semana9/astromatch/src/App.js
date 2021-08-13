import React, { useState } from 'react'
import ChooseProfilePage from './pages/ChooseProfilePage'
import MatchesPage from './pages/MatchesPage'

function App() {
  const [currentPage, setCurrentPage] = useState("chooseProfile")

  const selectPage = () => {
    switch (currentPage) {
      case "chooseProfile":
        return <ChooseProfilePage mudarPagina={changePageToMatches} />
      case "matches":
        return <MatchesPage mudarPagina={changePageToChooseProfile} />
      default:
        return <div>Error</div>
    }
  }

  const changePageToMatches = () => {
    setCurrentPage("matches")
  }

  const changePageToChooseProfile = () => {
    setCurrentPage("chooseProfile")
  }

  return (
    <div>
      {selectPage()}
    </div>
  );
}

export default App;