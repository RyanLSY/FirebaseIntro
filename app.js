// Task 1: Creating/Storing data

// let teams = [
//   {
//     teamName: "Real Madrid",
//     city: "Madrid",
//     country: "Spain",
//     topScorers: ["Ronaldo", "Benzema", "Hazard"],
//     worldwideFansInMillions: 798,
//   },
//   {
//     teamName: "Barcelona",
//     city: "Barcelona",
//     country: "Spain",
//     topScorers: ["Messi", "Suarez", "Puyol"],
//     worldwideFansInMillions: 738,
//   },
//   {
//     teamName: "Manchester United",
//     city: "Manchester",
//     country: "England",
//     topScorers: ["Cantona", "Rooney", "Ronaldo"],
//     worldwideFansInMillions: 755,
//   },
//   {
//     teamName: "Manchester City",
//     city: "Manchester",
//     country: "England",
//     topScorers: ["Sterling", "Aguero", "Haaland"],
//     worldwideFansInMillions: 537,
//   },
//   {
//     teamName: "Brazil National Team",
//     city: null,
//     country: "Brazil",
//     topScorers: ["Ronaldinho", "Cafu", "Bebeto"],
//     worldwideFansInMillions: 950,
//   },
//   {
//     teamName: "Argentina National Team",
//     city: null,
//     country: "Argentina",
//     topScorers: ["Messi", "Batistuta", "Maradona"],
//     worldwideFansInMillions: 888,
//   },
//   {
//     teamName: "Atletico Madrid",
//     city: "Madrid",
//     country: "Spain",
//     topScorers: ["Aragonés", "Griezmann", "Torez"],
//     worldwideFansInMillions: 400,
//   },
// ];

// teams.forEach((team) => {
//   db.collection("teams").add(team);
// });


// Task 2: Querying Data

// displayResults function
function displayResults(queryTitle, teams) {
  const resultsDiv = document.getElementById('results');
  
  resultsDiv.innerHTML += '<h3>' + queryTitle + '</h3>';
  
  teams.forEach(teamName => {
    resultsDiv.innerHTML += teamName + '<br>';
  });
  
  resultsDiv.innerHTML += '<br>';
}

// QUERY 1: Show all teams in Spain
db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((querySnapshot) => {
    console.log("=== QUERY 1: All teams in Spain ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().teamName);
      teams.push(doc.data().teamName);
    });
    displayResults("Query 1: All teams in Spain", teams);
  });


// QUERY 2: Show all teams in Madrid, Spain
db.collection("teams")
  .where("city", "==", "Madrid")
  .where("country", "==", "Spain")
  .get()
  .then((querySnapshot) => {
    console.log("\n=== QUERY 2: All teams in Madrid, Spain ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().teamName);
      teams.push(doc.data().teamName);
    });
    displayResults("Query 2: All teams in Madrid, Spain", teams);
  });


// QUERY 3: Show all national teams
db.collection("teams")
  .where("city", "==", null)
  .get()
  .then((querySnapshot) => {
    console.log("\n=== QUERY 3: All national teams ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().teamName);
      teams.push(doc.data().teamName);
    });
    displayResults("Query 3: All national teams", teams);
  });


// QUERY 4: Show all teams NOT in Spain
db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((querySnapshot) => {
    console.log("\n=== QUERY 4: All teams NOT in Spain ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().teamName);
      teams.push(doc.data().teamName);
    });
    displayResults("Query 4: All teams NOT in Spain", teams);
  });


// QUERY 5: Show all teams NOT in Spain or England
db.collection("teams")
  .get()
  .then((querySnapshot) => {
    console.log("\n=== QUERY 5: All teams NOT in Spain or England ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.country !== "Spain" && data.country !== "England") {
        console.log(data.teamName);
        teams.push(data.teamName);
      }
    });
    displayResults("Query 5: All teams NOT in Spain or England", teams);
  });


// QUERY 6: Teams in Spain with more than 700M fans
db.collection("teams")
  .where("country", "==", "Spain")
  .where("worldwideFansInMillions", ">", 700)
  .get()
  .then((querySnapshot) => {
    console.log("\n=== QUERY 6: Teams in Spain with > 700M fans ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().teamName);
      teams.push(doc.data().teamName);
    });
    displayResults("Query 6: Teams in Spain with > 700M fans", teams);
  });


// QUERY 7: Teams with 500M to 600M fans
db.collection("teams")
  .get()
  .then((querySnapshot) => {
    console.log("\n=== QUERY 7: Teams with 500M - 600M fans ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.worldwideFansInMillions >= 500 && data.worldwideFansInMillions <= 600) {
        console.log(data.teamName);
        teams.push(data.teamName);
      }
    });
    displayResults("Query 7: Teams with 500M - 600M fans", teams);
  });


// QUERY 8: Teams where Ronaldo is a top scorer
db.collection("teams")
  .where("topScorers", "array-contains", "Ronaldo")
  .get()
  .then((querySnapshot) => {
    console.log("\n=== QUERY 8: Teams where Ronaldo is a top scorer ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().teamName);
      teams.push(doc.data().teamName);
    });
    displayResults("Query 8: Teams where Ronaldo is a top scorer", teams);
  });


// QUERY 9: Teams where Ronaldo, Messi, or Maradona is a top scorer
db.collection("teams")
  .where("topScorers", "array-contains-any", ["Ronaldo", "Messi", "Maradona"])
  .get()
  .then((querySnapshot) => {
    console.log("\n=== QUERY 9: Teams where Ronaldo, Messi, or Maradona is a top scorer ===");
    const teams = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().teamName);
      teams.push(doc.data().teamName);
    });
    displayResults("Query 9: Teams where Ronaldo, Messi, or Maradona is a top scorer", teams);
  });


// Task 3: Updating Data


// Update Real Madrid: 811M fans and change name to "Real Madrid FC"
db.collection("teams")
  .where("teamName", "==", "Real Madrid")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        worldwideFansInMillions: 811,
        teamName: "Real Madrid FC"
      })
      .then(() => {
        console.log("Real Madrid updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating Real Madrid:", error);
      });
    });
  });

// Update Barcelona: 747M fans and change name to "FC Barcelona"
db.collection("teams")
  .where("teamName", "==", "Barcelona")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        worldwideFansInMillions: 747,
        teamName: "FC Barcelona"
      })
      .then(() => {
        console.log("Barcelona updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating Barcelona:", error);
      });
    });
  });




// Real Madrid: Remove Hazard, Add Crispo
db.collection("teams")
  .where("teamName", "==", "Real Madrid FC")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        topScorers: firebase.firestore.FieldValue.arrayRemove("Hazard")
      })
      .then(() => {
        // After removing Hazard, add Crispo
        db.collection("teams").doc(doc.id).update({
          topScorers: firebase.firestore.FieldValue.arrayUnion("Crispo")
        })
        .then(() => {
          console.log("Real Madrid top scorers updated successfully!");
        });
      })
      .catch((error) => {
        console.error("Error updating Real Madrid scorers:", error);
      });
    });
  });

// Barcelona: Remove Puyol, Add Deco
db.collection("teams")
  .where("teamName", "==", "FC Barcelona")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        topScorers: firebase.firestore.FieldValue.arrayRemove("Puyol")
      })
      .then(() => {
        // After removing Puyol, add Deco
        db.collection("teams").doc(doc.id).update({
          topScorers: firebase.firestore.FieldValue.arrayUnion("Deco")
        })
        .then(() => {
          console.log("Barcelona top scorers updated successfully!");
        });
      })
      .catch((error) => {
        console.error("Error updating Barcelona scorers:", error);
      });
    });
  });




// Add jersey colors to Real Madrid (search by updated name OR original name)
db.collection("teams")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.teamName === "Real Madrid FC" || data.teamName === "Real Madrid") {
        db.collection("teams").doc(doc.id).update({
          color: {
            home: "White",
            away: "Black"
          }
        })
        .then(() => {
          console.log("Real Madrid jersey colors added successfully!");
        })
        .catch((error) => {
          console.error("Error adding Real Madrid colors:", error);
        });
      }
    });
  });

// Add jersey colors to Barcelona (search by updated name OR original name)
db.collection("teams")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.teamName === "FC Barcelona" || data.teamName === "Barcelona") {
        db.collection("teams").doc(doc.id).update({
          color: {
            home: "Red",
            away: "Gold"
          }
        })
        .then(() => {
          console.log("Barcelona jersey colors added successfully!");
        })
        .catch((error) => {
          console.error("Error adding Barcelona colors:", error);
        });
      }
    });
  });




// Update Real Madrid away color to Purple
db.collection("teams")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.teamName === "Real Madrid FC" || data.teamName === "Real Madrid") {
        db.collection("teams").doc(doc.id).update({
          "color.away": "Purple"
        })
        .then(() => {
          console.log("Real Madrid away color updated to Purple!");
        })
        .catch((error) => {
          console.error("Error updating Real Madrid away color:", error);
        });
      }
    });
  });

// Update Barcelona away color to Pink
db.collection("teams")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.teamName === "FC Barcelona" || data.teamName === "Barcelona") {
        db.collection("teams").doc(doc.id).update({
          "color.away": "Pink"
        })
        .then(() => {
          console.log("Barcelona away color updated to Pink!");
        })
        .catch((error) => {
          console.error("Error updating Barcelona away color:", error);
        });
      }
    });
  });