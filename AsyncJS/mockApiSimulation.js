function fetchUserData() {
  return new Promise((resolve, reject) => {
    console.log("📡 Fetching user data...");
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance of success
      if (success) {
        resolve({ name: "Amandeep Awasthi", skill: "Frontend Developer", level: "Intermediate" });
      } else {
        reject("❌ Failed to fetch user data (network error)");
      }
    }, 2000);
  });
}

async function displayUserData() {
  console.log("⏳ Starting data fetch...");
  try {
    const user = await fetchUserData();
    console.log("✅ Data received:", user);
  } catch (error) {
    console.error("⚠️ Error:", error);
  } finally {
    console.log("🏁 Fetch operation complete.");
  }
}

displayUserData();
