document.addEventListener('DOMContentLoaded', function () {
    // Add hover effect to profile card
    const profileCard = document.querySelector('.profile-card');
    profileCard.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });

    profileCard.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });

    // Add click effect to profile picture
    const profilePicture = document.querySelector('.profile-picture');
    profilePicture.addEventListener('click', function () {
        alert('Profile picture clicked!');
    });
}); 