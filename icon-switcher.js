document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("ipasswd");
    const togglePasswordIcon = document.getElementById("toggle-password");

    const iconShow = `
        <path d="M28.725 14.727c.406.568.608.852.608 1.273s-.202.705-.608 1.273c-1.821 2.555-6.473 8.06-12.725 8.06s-10.904-5.505-12.725-8.06c-.406-.568-.608-.852-.608-1.273s.202-.705.608-1.273C5.096 12.173 9.748 6.667 16 6.667s10.904 5.506 12.725 8.06Z" stroke="#7A7A7A" stroke-width="2"/>
        <path d="M20 16a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="#7A7A7A" stroke-width="2"/>
    `;
    const iconHide = `
        <path d="M25.919 20.585a26 26 0 0 0 2.807-3.312c.405-.568.608-.852.608-1.273s-.203-.705-.608-1.273c-1.822-2.554-6.473-8.06-12.726-8.06-1.21 0-2.36.206-3.442.557M8.997 8.997c-2.688 1.813-4.674 4.26-5.722 5.73-.405.568-.608.852-.608 1.273s.203.705.608 1.273c1.821 2.555 6.473 8.06 12.725 8.06 2.655 0 5.02-.992 7.004-2.33" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.144 13.333a3.905 3.905 0 1 0 5.523 5.523" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round"/>
        <path d="m4 4 24 24" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `;

    passwordInput.type = "text";
    togglePasswordIcon.innerHTML = iconShow;

    togglePasswordIcon.addEventListener("click", () => {
        const isPasswordVisible = passwordInput.type === "text";
        passwordInput.type = isPasswordVisible ? "password" : "text";
        togglePasswordIcon.innerHTML = isPasswordVisible ? iconHide : iconShow;
    });
});