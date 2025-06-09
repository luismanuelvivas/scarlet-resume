// footer.js
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    footer.innerHTML = '<footer class="bg-gradient-to-r from-[#4300FF] via-[#0065F8] to-[#00CAFF] text-white p-6 mt-8">' +
        '<div class="container mx-auto">' +
            '<div class="flex flex-col md:flex-row justify-between items-center">' +
                '<div class="mb-4 md:mb-0">' +
                    '<p>&copy; 2023 Scarlet Rodriguez. All rights reserved.</p>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</footer>';
});