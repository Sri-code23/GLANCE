document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarList = document.getElementById('sidebarList');
    const mainContent = document.getElementById('mainContent');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
    }

    sidebarToggle.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);

    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleButton = sidebarToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggleButton && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    });

    // Get the current page name from the URL
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');

    // Function to load markdown content
    function loadMarkdownContent(section = null) {
        fetch(`${currentPage}.md`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                const html = marked.parse(text);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Clear existing content
                mainContent.innerHTML = '';
                sidebarList.innerHTML = '';

                // Always show all content
                mainContent.innerHTML = html;

                // // Highlight comments
                // const comments = mainContent.querySelectorAll('code');
                // comments.forEach(comment => {
                //     const commentText = comment.textContent;
                //     const singleLineComments = commentText.match(/\/\/.*$/gm);
                //     const multiLineComments = commentText.match(/\/\*[\s\S]*?\*\//g);
                //     const allComments = singleLineComments ? singleLineComments : multiLineComments;
                //     if (allComments) {
                //         allComments.forEach(comment => {
                //             const span = document.createElement('span');
                //             span.className = 'comment';
                //             span.textContent = comment;
                //             const regex = new RegExp(comment.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                //             commentText = commentText.replace(regex, '');
                //             comment.textContent = commentText;
                //             comment.appendChild(span);
                //         });
                //     }
                // });

                // Create sidebar links
                const headers = mainContent.querySelectorAll('h2');
                headers.forEach((header, index) => {
                    const id = `section-${index + 1}`;
                    header.id = id;
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.textContent = header.textContent;
                    a.href = `#${id}`;
                    a.addEventListener('click', function(e) {
                        e.preventDefault();
                        header.scrollIntoView({ behavior: 'smooth' });
                        if (window.innerWidth <= 768) {
                            toggleSidebar();
                        }
                    });
                    li.appendChild(a);
                    sidebarList.appendChild(li);
                });
                // If a specific section is requested, scroll to it
                if (section) {
                    const sectionElement = document.getElementById(section);
                    if (sectionElement) {
                        sectionElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                // Add smooth scrolling for all links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href').slice(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                    });
                });
            })
            .catch(error => {
                console.error('Error loading markdown file:', error);
                mainContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    }
    // Initial load of full content
    loadMarkdownContent();
    // Add event listener for popstate to handle browser back/forward navigation
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.section) {
            loadMarkdownContent(event.state.section);
        } else {
            loadMarkdownContent();
        }
    });
});








// document.addEventListener('DOMContentLoaded', function() {
//     const sidebar = document.getElementById('sidebar');
//     const sidebarToggle = document.getElementById('sidebarToggle');
//     const closeSidebar = document.getElementById('closeSidebar');
//     const sidebarList = document.getElementById('sidebarList');
//     const mainContent = document.getElementById('mainContent');

//     function toggleSidebar() {
//         sidebar.classList.toggle('open');
//         document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
//     }

//     sidebarToggle.addEventListener('click', toggleSidebar);
//     closeSidebar.addEventListener('click', toggleSidebar);

//     document.addEventListener('click', function(event) {
//         const isClickInsideSidebar = sidebar.contains(event.target);
//         const isClickOnToggleButton = sidebarToggle.contains(event.target);

//         if (!isClickInsideSidebar && !isClickOnToggleButton && sidebar.classList.contains('open')) {
//             toggleSidebar();
//         }
//     });

//     // Get the current page name from the URL
//     const currentPage = window.location.pathname.split('/').pop().replace('.html', '');

//     // Function to load markdown content
//     function loadMarkdownContent(section = null) {
//         fetch(`${currentPage}.md`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text();
//             })
//             .then(text => {
//                 const html = marked.parse(text);
//                 const tempDiv = document.createElement('div');
//                 tempDiv.innerHTML = html;

//                 // Clear existing content
//                 mainContent.innerHTML = '';
//                 sidebarList.innerHTML = '';

//                 // Always show all content
//                 mainContent.innerHTML = html;

//                 // Highlight comments
//                 const comments = mainContent.querySelectorAll('code');
//                 comments.forEach(comment => {
//                     const commentText = comment.textContent;
//                     const singleLineComments = commentText.match(/\/\/.*|\/\*.*?\*\//g);
//                     const multiLineComments = commentText.match(/\/\*[\s\S]*?\*\//g);
//                     const allComments = singleLineComments ? singleLineComments : multiLineComments;
//                     if (allComments) {
//                         allComments.forEach(comment => {
//                             const span = document.createElement('span');
//                             span.className = 'comment';
//                             span.textContent = comment;
//                             comment.replaceWith(span);
//                         });
//                     }
//                 });

//                 // Create sidebar links
//                 const headers = mainContent.querySelectorAll('h2');
//                 headers.forEach((header, index) => {
//                     const id = `section-${index + 1}`;
//                     header.id = id;
//                     const li = document.createElement('li');
//                     const a = document.createElement('a');
//                     a.textContent = header.textContent;
//                     a.href = `#${id}`;
//                     a.addEventListener('click', function(e) {
//                         e.preventDefault();
//                         header.scrollIntoView({ behavior: 'smooth' });
//                         if (window.innerWidth <= 768) {
//                             toggleSidebar();
//                         }
//                     });
//                     li.appendChild(a);
//                     sidebarList.appendChild(li);
//                 });

//                 // If a specific section is requested, scroll to it
//                 if (section) {
//                     const sectionElement = document.getElementById(section);
//                     if (sectionElement) {
//                         sectionElement.scrollIntoView({ behavior: 'smooth' });
//                     }
//                 }

//                 // Add smooth scrolling for all links
//                 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//                     anchor.addEventListener('click', function (e) {
//                         e.preventDefault();
//                         const targetId = this.getAttribute('href').slice(1);
//                         const targetElement = document.getElementById(targetId);
//                         if (targetElement) {
//                             targetElement.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }
//                     });
//                 });
//             })
//             .catch(error => {
//                 console.error('Error loading markdown file:', error);
//                 mainContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
//             });
//     }

//     // Initial load of full content
//     loadMarkdownContent();

//     // Add event listener for popstate to handle browser back/forward navigation
//     window.addEventListener('popstate', function(event) {
//         if (event.state && event.state.section) {
//             loadMarkdownContent(event.state.section);
//         } else {
//             loadMarkdownContent();
//         }
//     });
// });















// document.addEventListener('DOMContentLoaded', function() {
//     const sidebar = document.getElementById('sidebar');
//     const sidebarToggle = document.getElementById('sidebarToggle');
//     const closeSidebar = document.getElementById('closeSidebar');
//     const sidebarList = document.getElementById('sidebarList');
//     const mainContent = document.getElementById('mainContent');

//     function toggleSidebar() {
//         sidebar.classList.toggle('open');
//         document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
//     }

//     sidebarToggle.addEventListener('click', toggleSidebar);
//     closeSidebar.addEventListener('click', toggleSidebar);

//     document.addEventListener('click', function(event) {
//         const isClickInsideSidebar = sidebar.contains(event.target);
//         const isClickOnToggleButton = sidebarToggle.contains(event.target);

//         if (!isClickInsideSidebar && !isClickOnToggleButton && sidebar.classList.contains('open')) {
//             toggleSidebar();
//         }
//     });
    
//     fetch('python.md')
//         .then(response => response.text())
//         .then(text => {
//             const html = marked.parse(text);
//             mainContent.innerHTML = html;

//             const headers = mainContent.querySelectorAll('h2');
//             headers.forEach((header, index) => {
//                 header.id = `section-${index + 1}`;
//                 const li = document.createElement('li');
//                 const a = document.createElement('a');
//                 a.textContent = header.textContent;
//                 a.href = `#${header.id}`;
//                 a.addEventListener('click', function(e) {
//                     e.preventDefault();
//                     header.scrollIntoView({ behavior: 'smooth' });
//                     if (window.innerWidth <= 768) {
//                         toggleSidebar();
//                     }
//                 });
//                 li.appendChild(a);
//                 sidebarList.appendChild(li);
//             });
//         })
//         .catch(error => {
//             console.error('Error loading markdown file:', error);
//             mainContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
//         });

//     // Add smooth scrolling for all links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });

