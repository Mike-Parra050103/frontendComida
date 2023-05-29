import React, {useEffect, useState} from 'react';
import L from 'leaflet'
import styles from './mappage.module.css'

const MapPage = () => {
	// Attach necessary scripts
	useEffect(() => {
		const mapBtn = document.getElementById("mapBtn");
		const favoritesBtn = document.getElementById("favoritesBtn");
		const settingsBtn = document.getElementById("settingsBtn");
		const logoutBtn = document.getElementById("logoutBtn");
		const favoritesSection = document.getElementById("favoritesSection");
		const settingsSection = document.getElementById("settingsSection");
		const overlay = document.getElementById("overlay");
		const popup = document.getElementById("popup");
		const yesButton = document.getElementById("yesButton");
		const goBackButton = document.getElementById("goBackButton");
		const markerSection = document.getElementById("markerSection");
		const markerCloseBtn = document.getElementById("markerCloseBtn");

		let markerPopup;

		mapBtn.addEventListener("click", () => {
			favoritesSection.classList.remove("active");
			settingsSection.classList.remove("active");
			closePopup();
		});

		favoritesBtn.addEventListener("click", () => {
			favoritesSection.classList.add("active");
			settingsSection.classList.remove("active");
			closePopup();
		});

		settingsBtn.addEventListener("click", () => {
			favoritesSection.classList.remove("active");
			settingsSection.classList.add("active");
			closePopup();
		});

		logoutBtn.addEventListener("click", () => {
			openPopup();
		});

		yesButton.addEventListener("click", () => {
			// Redirect to another page for logout
			window.location.href = "login.html";
		});

		goBackButton.addEventListener("click", () => {
			closePopup();
		});

		function openPopup() {
			overlay.style.display = "block";
			popup.style.display = "block";
		}

		function closePopup() {
			overlay.style.display = "none";
			popup.style.display = "none";
		}

// Leaflet Map Initialization
		const map = L.map("mapContainer").setView([4.3007, -74.8008], 15);
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
			maxZoom: 18,
		}).addTo(map);

		const marker = L.marker([4.3007, -74.8008]).addTo(map);

		marker.on("click", () => {
			favoritesSection.classList.remove("active");
			settingsSection.classList.remove("active");
			markerSection.classList.add("active");
			closePopup();
		});

		markerCloseBtn.addEventListener("click", () => {
			markerSection.classList.remove("active");
		});

		function openPopup() {
			overlay.style.display = "block";
			popup.style.display = "block";
			markerSection.classList.remove("active"); // Close marker section when the popup opens
		}

		function closePopup() {
			overlay.style.display = "none";
			popup.style.display = "none";
		}
	}, []);

	return(
		<div>
			<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
				  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
				  crossOrigin=""/>

			<div className={styles.container}>
				<div className={styles.sidebar}>
					<button className={styles.button} id="mapBtn">Map</button>
					<button className={styles.button} id="favoritesBtn">Favorites</button>
					<button className={styles.button} id="settingsBtn">Settings</button>
					<button className={styles.button} id="logoutBtn">Log Out</button>
				</div>
				<div className={styles.content} id="mapContainer"></div>
			</div>

			<div className={styles.floatingSection} id="favoritesSection">
				<h2>Favorites</h2>

			</div>

			<div className={styles.floatingSection} id="settingsSection">
				<h2>Settings</h2>

			</div>

			<div className={styles.overlay} id="overlay"></div>
			<div className={styles.popup} id="popup">
				<h3>Log Out and Close Session?</h3>
				<div className={styles.buttonContainer}>
					<button className={styles.popupButton} id="yesButton">Yes</button>
					<button className={styles.popupButton} id="goBackButton">Go Back</button>
				</div>
			</div>

			<div className={styles.floatingSection} id="markerSection">
				<button className={styles.closeButton} id="markerCloseBtn">Close</button>
				<h2>Marker Details</h2>

				<script>
				</script>
			</div>

			<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
					integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
					crossOrigin=""></script>
		</div>
	);
};

export default MapPage;
