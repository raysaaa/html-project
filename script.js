window.onload = function () {
    setTimeout(() => {
        fadeOutLoadingScreen();
        setTimeout(() => {
            fadeInBrandName();
        }, 500);
    }, 2000); 
}
    document.addEventListener('click', () => {
        stopLoading();
    });
    document.addEventListener('keydown', () => {
        stopLoading();
    });

    function stopLoading() {
        fadeOutLoadingScreen();
        fadeInBrandName();
    }

    function fadeOutLoadingScreen() {
        document.getElementById('loading-screen').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 1000); 

    function fadeInBrandName() {
        const brandName = document.getElementById('brand-name');
        brandName.style.opacity = 1;
        brandName.style.transform = 'translate(-50%, -50%)'; 
        setTimeout(() => {
            brandName.style.opacity = 0;
            brandName.style.transform = 'translate(-50%, -70%)'; 

            setTimeout(() => {
                fadeInMainContent();
            }, 1000);
        }, 3000); 
    }

    function fadeInMainContent() {
        const mainContent = document.getElementById('main-content');
        mainContent.style.opacity = 1;
        mainContent.style.visibility = 'visible';
        document.querySelector('.hero-section').style.opacity = 1;
        document.querySelector('.hero-section').style.transform = 'translateY(0)';
    }
}