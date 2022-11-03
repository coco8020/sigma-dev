var Webflow = Webflow || [];
Webflow.push(function () {
  var searchSnippet =
    '<div class="g-mg-bottom-large" style="position: relative;"><div class="w-embed"><img src="https://assets-global.website-files.com/62a3d35f74b3a546c309e010/63406002ed9b57daff3fcfb2_ico-close.svg" loading="lazy" alt="" class="input-close"><input type="text" class="search g-shadow-100 w-input" maxlength="256" placeholder="Search" id="search"></div></div>';

  // NAVBAR

  // if .navbar exists, add class
  if (document.querySelector(".navbar")) {
    var timesClicked = 0;

    $(".nav-hamburger-button").click(function () {
      timesClicked++;

      if (timesClicked % 2 === 0) {
        //run closed function
        // set body to overflow hidden
        $("body").css("overflow", "auto");
      } else {
        //run open function
        // set body to overflow auto
        $("body").css("overflow", "hidden");
      }
    });
  }

  // if URL is home page

  if (window.location.pathname === "/") {
    // MOBILE DROPDOWNS

    // get innerHTML of each element with class .w-tab-pane and store in array
    var tabPanes = [];
    document.querySelectorAll(".w-tab-pane").forEach(function (tabPane) {
      tabPanes.push(tabPane.innerHTML);
    });

    // append each item in tabPanes to corresponding element with class .accordion-content_spacer
    var accordionContentSpacers = document.querySelectorAll(
      ".accordion-content_spacer"
    );

    accordionContentSpacers.forEach(function (accordionContentSpacer, index) {
      accordionContentSpacer.innerHTML = tabPanes[index];
    });
  }

  // PRODUCT TABS

  // if element with class "product-tabs_tabs-component" exists
  if (document.querySelector(".product-tabs_tabs-component")) {
    function productTabsComponent() {
      // if screen width is more than 767px
      if (window.innerWidth > 767) {
        // var tabs = document.querySelectorAll(".product-tabs_tab-link");
        // tabs.forEach(function (tab) {
        //     tab.style.display = "block";
        //     tab.style.backgroundImage = "none";
        //     tab.parentElement.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
        // });

        // // remove click event listener from .product-tabs_tab-link.w--current
        // var currentTab = document.querySelectorAll(".product-tabs_tab-link.w--current");

        // // remove event listener from productTabsCurrent
        // currentTab.forEach(function (productTab) {
        //     productTab.removeEventListener("click", currentTabFn );
        // }
        // );

        // get element with class "product-tabs_tabs-component"
        var tabsComponent = document.querySelector(
          ".product-tabs_tabs-component"
        );
        // get element with attribute product-tabs="height"
        var gridWrapper = document.querySelector('[product-tabs="height"]');
        // get height of gridWrapper
        var gridWrapperHeight = gridWrapper.offsetHeight;
        tabsComponent.style.gridTemplateRows = gridWrapperHeight + "px auto";

        // // add mutation observer to all elements with class "product-tabs_tab-pane" to detect when class "w--tab-active" is added
        // var observerTabPanes = new MutationObserver(function (mutations) {
        //     mutations.forEach(function (mutation) {
        //         if (mutation.target.classList.contains("w--tab-active")) {
        //             // get height of child element with class "grid-wrapper"
        //             var gridWrapperHeight = mutation.target.querySelector(
        //                 ".grid-wrapper"
        //             ).offsetHeight;
        //             // set grid-template-rows of element with class "product-tabs_tabs-component" to auto + gridWrapperHeight + auto
        //             document.querySelector(
        //                 ".product-tabs_tabs-component"
        //             ).style.gridTemplateRows = gridWrapperHeight + "px auto";
        //         }
        //     });
        // });

        // // observe all elements with class "product-tabs_tab-pane"
        // var target = document.querySelectorAll(".product-tabs_tab-pane");
        // target.forEach(function (element) {
        //     observerTabPanes.observe(element, {
        //         attributes: true,
        //         attributeFilter: ["class"]
        //     });
        // });
      }

      // if screen is smaller than 768px
      if (window.innerWidth < 768) {
        // // get element with class "product-tabs_tabs-component"
        // var tabsComponent = document.querySelector(
        //     ".product-tabs_tabs-component"
        // );
        // // get child of productTabs with class "grid-wrapper"
        // var gridWrapper = tabsComponent.querySelector(".grid-wrapper");
        // // get height of gridWrapper
        // var gridWrapperHeight = gridWrapper.offsetHeight;
        // var rowHeight = gridWrapperHeight + 40;
        // tabsComponent.style.gridTemplateRows = "auto " + rowHeight + "px auto";

        // // add mutation observer to all elements with class "product-tabs_tab-pane" to detect when class "w--tab-active" is added
        // var observerTabPanes = new MutationObserver(function (mutations) {
        //     mutations.forEach(function (mutation) {
        //         if (mutation.target.classList.contains("w--tab-active")) {
        //             // get height of child element with class "grid-wrapper"
        //             var gridWrapperHeight = mutation.target.querySelector(
        //                 ".grid-wrapper"
        //             ).offsetHeight;
        //             var rowHeight = gridWrapperHeight + 40;
        //             // set grid-template-rows of element with class "product-tabs_tabs-component" to auto + gridWrapperHeight + auto
        //             document.querySelector(
        //                 ".product-tabs_tabs-component"
        //             ).style.gridTemplateRows = "auto " + rowHeight + "px auto";
        //         }
        //     });
        // });

        // // observe all elements with class "product-tabs_tab-pane"
        // var target = document.querySelectorAll(".product-tabs_tab-pane");
        // target.forEach(function (element) {
        //     observerTabPanes.observe(element, {
        //         attributes: true,
        //         attributeFilter: ["class"]
        //     });
        // });

        // TABS FUNCTIONALITY ON MOBILE

        // add mutation observer to all elements with the class "product-tabs_tab-link" to detect when attribute "aria-selected" changes
        var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.attributeName === "aria-selected") {
              var target = mutation.target;
              var value = target.getAttribute("aria-selected");
              if (value === "true") {
                // set all elements with the class "product-tabs_tab-link" to display: none
                var tabs = document.querySelectorAll(".product-tabs_tab-link");
                tabs.forEach(function (tab) {
                  tab.style.display = "none";
                });
                // set the target element to display: block
                target.style.display = "block";
                target.style.borderColor = "#e2e2e2";
                target.style.backgroundImage =
                  "url(https://assets.website-files.com/62a3d35f74b3a546c309e010/62f5c6ec915f956f7d97df78_chevron-small.svg)";
                // set box shadow of parent element to 0px 0px 0px 0px rgba(0, 0, 0, 0)
                target.parentElement.style.boxShadow =
                  "0px 0px 0px 0px rgba(0, 0, 0, 0)";
                openTabs();
              }
            }
          });
        });

        var config = { attributes: true, attributeFilter: ["aria-selected"] };
        var productTabs = document.querySelectorAll(".product-tabs_tab-link");
        for (var i = 0; i < productTabs.length; i++) {
          observer.observe(productTabs[i], config);
        }

        function openTabs() {
          var productTabsCurrent = document.querySelectorAll(
            ".product-tabs_tab-link.w--current"
          );

          productTabsCurrent.forEach(function (productTab) {
            productTab.addEventListener("click", function () {
              // set border color of target element to #0000
              productTab.style.borderColor = "#0000";
              productTab.style.backgroundImage = "none";
              // set box shadow of parent element to 0 4px 24px 0 rgb(28 28 28 / 16%)
              productTab.parentElement.style.boxShadow =
                "0 4px 24px 0 rgba(28, 28, 28, 0.16)";
              // set all elements with the class "product-tabs_tab-link" to display:block
              var productTabs = document.querySelectorAll(
                ".product-tabs_tab-link"
              );
              productTabs.forEach(function (productTab) {
                productTab.style.display = "block";
              });
            });
          });
        }

        openTabs();
      }
    }

    productTabsComponent();

    // when screen is resized call productTabsComponent() again
    window.addEventListener("resize", function () {
      productTabsComponent();
    });
  }

  // JOBS

  // if page is /careers
  if (window.location.pathname === "/careers") {
    // fetch https://boards-api.greenhouse.io/v1/boards/sigmacomputing/departments and parse JSON
    fetch(
      "https://boards-api.greenhouse.io/v1/boards/sigmacomputing/departments"
    )
      .then((response) => response.json())
      .then((data) => {
        // get departments from data
        var departments = data.departments;

        // if screen is larger than 991px
        if (window.innerWidth > 991) {
          // remove elements inside .open-positions_tabs-menu
          var openPositionsTabsMenu = document.querySelector(
            ".open-positions_tabs-menu"
          );
          while (openPositionsTabsMenu.firstChild) {
            openPositionsTabsMenu.removeChild(openPositionsTabsMenu.firstChild);
          }

          // remove elements inside .open-positions_tabs-content
          var openPositionsTabsContent = document.querySelector(
            ".open-positions_tabs-content"
          );
          while (openPositionsTabsContent.firstChild) {
            openPositionsTabsContent.removeChild(
              openPositionsTabsContent.firstChild
            );
          }

          // for each department with id not 0 in departments
          departments.forEach(function (department) {
            // if department has jobs
            if (department.jobs.length > 0) {
              // append <button> element with class .open-positions_tab-link to .open-positions_tabs-menu
              var tabLink = document.createElement("button");
              tabLink.classList.add("open-positions_tab-link");
              tabLink.setAttribute("data-department-id", department.id);
              // append paragraph element with department name to tabLink
              var tabLinkDepartment = document.createElement("p");
              tabLinkDepartment.innerHTML = department.name;
              tabLink.appendChild(tabLinkDepartment);
              // append div element with class .count to tabLink and set innerHTML to department.jobs.length
              var tabLinkCount = document.createElement("div");
              tabLinkCount.classList.add("count");
              tabLinkCount.innerHTML = department.jobs.length;
              tabLink.appendChild(tabLinkCount);
              tabLink.setAttribute("aria-selected", "false");
              tabLink.setAttribute("role", "tab");
              tabLink.setAttribute("tabindex", "-1");
              tabLink.setAttribute("id", "tab-link-" + department.id);
              tabLink.setAttribute(
                "aria-controls",
                "tab-pane-" + department.id
              );
              tabLink.setAttribute("type", "button");
              openPositionsTabsMenu.appendChild(tabLink);

              var tabContent = document.querySelector(
                ".open-positions_tabs-content"
              );

              // append <div> element with class .open-positions_tab-pane to .open-positions_tabs-content
              var tabPane = document.createElement("div");
              tabPane.classList.add("open-positions_tab-pane");
              tabPane.setAttribute("data-department-id", department.id);
              tabPane.setAttribute("role", "tabpanel");
              tabPane.setAttribute(
                "aria-labelledby",
                "tab-link-" + department.id
              );
              tabPane.setAttribute("id", "tab-pane-" + department.id);
              tabPane.setAttribute("aria-hidden", "true");
              tabContent.appendChild(tabPane);

              // for each job in department
              department.jobs.forEach(function (job) {
                // append <a> element with class .open-positions_job-link to .open-positions_tab-pane
                var jobLink = document.createElement("a");
                jobLink.classList.add("open-positions_job-link");
                jobLink.setAttribute("href", job.absolute_url);
                jobLink.setAttribute("target", "_blank");
                jobLink.setAttribute("rel", "noopener noreferrer");

                // append <p> element with innerHTML job.title to .open-positions_job-link
                var jobTitle = document.createElement("p");
                jobTitle.innerHTML = job.title;
                jobLink.appendChild(jobTitle);

                // append <p> element with innerHTML job.location.name to .open-positions_job-link
                var jobLocation = document.createElement("p");
                jobLocation.innerHTML = job.location.name;
                jobLink.appendChild(jobLocation);

                // add classes .paragraph-2, .g-font-weight-regular-400, .g-text-color-neutral-10 and .g-text-align-right jobLocation
                jobLocation.classList.add(
                  "paragraph-2",
                  "g-font-weight-regular-400",
                  "g-text-color-neutral-10",
                  "g-text-align-right"
                );

                tabPane.appendChild(jobLink);
              });

              // add .is-hidden class to all .open-positions_tab-pane elements
              var tabPanes = document.querySelectorAll(
                ".open-positions_tab-pane"
              );
              tabPanes.forEach(function (tabPane) {
                tabPane.classList.add("is-hidden");
              });

              //   // append <a> element with class .open-positions_tab-link to element with class .open-positions_tabs-menu
              //   var tabLink = document.createElement("a");
              //   tabLink.classList.add("open-positions_tab-link");
              //   tabLink.setAttribute("href", "#");
              //   tabLink.setAttribute("aria-selected", "false");
              //   tabLink.setAttribute(
              //     "aria-controls",
              //     "open-positions_tab-" + department.id
              //   );
              //   tabLink.setAttribute("role", "tab");
              //   tabLink.setAttribute("data-toggle", "tab");
              //   tabLink.setAttribute("data-department", department.id);
              //   tabLink.innerHTML = department.name;
              //   document
              //     .querySelector(".open-positions_tabs-menu")
              //     .appendChild(tabLink);
              //   // add event listener to tabLink to detect when tab is clicked
              //   tabLink.addEventListener("click", function () {
              //     // set tabLink to active
              //     tabLink.setAttribute("aria-selected", "true");
              //     // set all tabLinks to inactive
              //     var tabLinks = document.querySelectorAll(
              //       ".open-positions_tab-link"
              //     );
              //     tabLinks.forEach(function (tabLink) {
              //       tabLink.setAttribute("aria-selected", "false");
              //     });
              //     // remove class .cc-current from all elements with class .open-positions_tab-link
              //     var tabLinks = document.querySelectorAll(
              //       ".open-positions_tab-link"
              //     );
              //     tabLinks.forEach(function (tabLink) {
              //       tabLink.classList.remove("cc-current");
              //     });
              //     // add class .cc-current to tabLink
              //     tabLink.classList.add("cc-current");
              //     // delete all elements inside element with class .open-positions_tabs-content
              //     var tabContents = document.querySelectorAll(
              //       ".open-positions_tabs-content"
              //     );
              //     tabContents.forEach(function (tabContent) {
              //       while (tabContent.firstChild) {
              //         tabContent.removeChild(tabContent.firstChild);
              //       }
              //     });
              //     // get all jobs from department
              //     var jobs = department.jobs;
              //     // for each job in jobs
              //     jobs.forEach(function (job) {
              //       console.log(job);
              //       // append <a> element with class .open-positions_job-link to element with class .open-positions_tabs-content
              //       var jobLink = document.createElement("a");
              //       jobLink.classList.add("open-positions_job-link");
              //       jobLink.setAttribute("href", job.absolute_url);
              //       var jobTitle = document.createElement("p");
              //       jobTitle.innerHTML = job.title;
              //       jobLink.appendChild(jobTitle);
              //       var jobLocation = document.createElement("p");
              //       jobLocation.innerHTML = job.location.name;
              //       jobLocation.classList.add("paragraph-2");
              //       jobLocation.classList.add("g-font-weight-regular-400");
              //       jobLocation.classList.add("g-text-color-neutral-10");
              //       jobLocation.classList.add("g-text-align-right");
              //       jobLink.appendChild(jobLocation);
              //       // set jobLink target to _blank
              //       jobLink.setAttribute("target", "_blank");
              //       document
              //         .querySelector(".open-positions_tabs-content")
              //         .appendChild(jobLink);
              //     });
              //   });
            }
          });

          // create an all tab and prepend it to the tab menu
          var allTab = document.createElement("button");
          allTab.classList.add("open-positions_tab-link");
          allTab.setAttribute("href", "#");
          allTab.setAttribute("aria-selected", "true");
          allTab.setAttribute("aria-controls", "open-positions_tab-all");
          allTab.setAttribute("role", "tab");
          allTab.setAttribute("data-toggle", "tab");
          allTab.setAttribute("data-department-id", "all");
          // append <p> element with innerHTML "All" to allTab
          var allTabText = document.createElement("p");
          allTabText.innerHTML = "All";
          allTab.appendChild(allTabText);
          // append div with class .count to allTab
          var allTabCount = document.createElement("div");
          allTabCount.classList.add("count");
          allTab.appendChild(allTabCount);
          document.querySelector(".open-positions_tabs-menu").prepend(allTab);

          // create a tab pane for all jobs and prepend it to the tab content
          var allTabPane = document.createElement("div");
          allTabPane.classList.add("open-positions_tab-pane");
          allTabPane.setAttribute("data-department-id", "all");
          allTabPane.setAttribute("role", "tabpanel");
          allTabPane.setAttribute("aria-labelledby", "open-positions_tab-all");
          document
            .querySelector(".open-positions_tabs-content")
            .prepend(allTabPane);

          departments.forEach(function (department) {
            // if department has jobs
            if (department.jobs.length > 0) {
              // get all jobs from department
              var jobs = department.jobs;
              // create an a element for each job and append it to the all tab pane
              jobs.forEach(function (job) {
                var jobLink = document.createElement("a");
                jobLink.classList.add("open-positions_job-link");
                jobLink.setAttribute("href", job.absolute_url);
                var jobTitle = document.createElement("p");
                jobTitle.innerHTML = job.title;
                jobLink.appendChild(jobTitle);
                var jobLocation = document.createElement("p");
                jobLocation.innerHTML = job.location.name;
                jobLocation.classList.add("paragraph-2");
                jobLocation.classList.add("g-font-weight-regular-400");
                jobLocation.classList.add("g-text-color-neutral-10");
                jobLocation.classList.add("g-text-align-right");
                jobLink.appendChild(jobLocation);
                // set jobLink target to _blank
                jobLink.setAttribute("target", "_blank");
                allTabPane.prepend(jobLink);
              });
            }
          });

          // count all items in all tab pane
          var allTabPaneCount = allTabPane.querySelectorAll(
            ".open-positions_job-link"
          ).length;
          // get div with class .count inside allTab
          var allTabCount = allTab.querySelector(".count");
          // set innerHTML of allTabCount to allTabPaneCount
          allTabCount.innerHTML = allTabPaneCount;

          // add event listener to .open-positions_tab-link elements to show .open-positions_tab-pane elements
          var tabLinks = document.querySelectorAll(".open-positions_tab-link");
          tabLinks.forEach(function (tabLink) {
            tabLink.addEventListener("click", function () {
              // get all .open-positions_tab-link elements
              var tabLinks = document.querySelectorAll(
                ".open-positions_tab-link"
              );

              // if an element with class .cc-current exists
              if (document.querySelector(".cc-current")) {
                // scroll smoothly to #open-positions
                document.querySelector("#open-positions").scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }

              // remove .cc-current class from all .open-positions_tab-link elements
              tabLinks.forEach(function (tabLink) {
                tabLink.classList.remove("cc-current");
                tabLink.setAttribute("aria-selected", "false");
                tabLink.setAttribute("tabindex", "-1");
              });

              // add .cc-current class to clicked .open-positions_tab-link element
              tabLink.classList.add("cc-current");

              // remove .is-hidden class from .open-positions_tab-pane element with data-department-id attribute equal to tabLink's data-department-id attribute
              var tabPane = document.querySelector(
                ".open-positions_tab-pane[data-department-id='" +
                  tabLink.getAttribute("data-department-id") +
                  "']"
              );
              tabPane.classList.remove("is-hidden");
              tabLink.setAttribute("aria-selected", "true");
              tabLink.setAttribute("tabindex", "0");

              // add .is-hidden class to all .open-positions_tab-pane elements except the one with data-department-id attribute equal to tabLink's data-department-id attribute
              var tabPanes = document.querySelectorAll(
                ".open-positions_tab-pane"
              );
              tabPanes.forEach(function (tabPane) {
                if (
                  tabPane.getAttribute("data-department-id") !==
                  tabLink.getAttribute("data-department-id")
                ) {
                  tabPane.classList.add("is-hidden");
                }
              });

              // get inner text of clicked .open-positions_tab-link element
              var tabLinkText = tabLink.innerText;

              // delete digits and line breaks from tabLinkText
              tabLinkText = tabLinkText.replace(/\d+/g, "");
              tabLinkText = tabLinkText.replace(/\n/g, "");

              // get element with id department-title
              var departmentTitle = document.querySelector("#department-title");

              // if tabLinkText is All
              if (tabLinkText === "All") {
                // set inner text of element with id department-title to tabLinkText
                departmentTitle.innerText = tabLinkText + " Open";
                // set display none to element with id open-span
                document.querySelector("#open-span").style.display = "none";
              } else {
                // set inner text of element with id department-title to tabLinkText
                departmentTitle.innerText = tabLinkText;
                // set display block to element with id open-span
                document.querySelector("#open-span").style.display = "inline";
              }
            });
          });

          var searchSnippet =
            '<div class="g-mg-bottom-large" style="position: relative;"><div class="w-embed"><img src="https://assets-global.website-files.com/62a3d35f74b3a546c309e010/63406002ed9b57daff3fcfb2_ico-close.svg" loading="lazy" alt="" class="input-close"><input type="text" class="search g-shadow-100 w-input" maxlength="256" placeholder="Search" id="search"></div></div>';

          document
            .querySelector(".open-positions_tabs-menu")
            .insertAdjacentHTML("beforebegin", searchSnippet);

          var searchInput = document.querySelector("#search");

          searchInput.addEventListener("keyup", function () {
            // set display block to .input-close
            document.querySelector(".input-close").style.display = "block";

            var searchValue = searchInput.value.toLowerCase();
            var jobLinks = document.querySelectorAll(
              ".open-positions_job-link"
            );
            jobLinks.forEach(function (jobLink) {
              var jobTitle = jobLink.querySelector("p").innerText.toLowerCase();
              var jobLocation = jobLink
                .querySelector("p:nth-child(2)")
                .innerText.toLowerCase();
              if (
                jobTitle.indexOf(searchValue) > -1 ||
                jobLocation.indexOf(searchValue) > -1
              ) {
                jobLink.classList.remove("is-hidden");
              } else {
                jobLink.classList.add("is-hidden");
              }
            });

            // count the number of visible job links in each tab pane
            var tabPanes = document.querySelectorAll(
              ".open-positions_tab-pane"
            );
            tabPanes.forEach(function (tabPane) {
              var tabPaneCount = tabPane.querySelectorAll(
                ".open-positions_job-link:not(.is-hidden)"
              ).length;
              var tabPaneId = tabPane.getAttribute("data-department-id");
              var tab = document.querySelector(
                ".open-positions_tab-link[data-department-id='" +
                  tabPaneId +
                  "']"
              );
              var tabCount = tab.querySelector(".count");
              tabCount.innerHTML = tabPaneCount;
            });

            // get all elements wit class .count
            var counts = document.querySelectorAll(".count");
            // if counts innerHTML is 0 set display to none
            counts.forEach(function (count) {
              if (count.innerHTML === "0") {
                count.style.display = "none";
              } else {
                count.style.display = "block";
              }
            });

            // if search input is empty set display to none for all counts
            if (searchValue === "") {
              counts.forEach(function (count) {
                count.style.display = "none";
                // set display none to .input-close
                document.querySelector(".input-close").style.display = "none";
              });
            }
          });

          // add event listener to .input-close
          document
            .querySelector(".input-close")
            .addEventListener("click", function () {
              // set search input value to empty string
              searchInput.value = "";
              // set display none to .input-close
              document.querySelector(".input-close").style.display = "none";
              // set display none to all .count elements
              var counts = document.querySelectorAll(".count");
              counts.forEach(function (count) {
                count.style.display = "none";
              });
              // set display block to all .open-positions_job-link elements
              var jobLinks = document.querySelectorAll(
                ".open-positions_job-link"
              );
              jobLinks.forEach(function (jobLink) {
                jobLink.classList.remove("is-hidden");
              });
            });

          // click first element inside .open-positions_tabs-menu
          document
            .querySelector(".open-positions_tabs-menu")
            .firstElementChild.click();
        } else {
          // remove all elements inside .open-positions-dropdown_list
          var dropdownList = document.querySelector(
            ".open-positions-dropdown_list"
          );
          while (dropdownList.firstChild) {
            dropdownList.removeChild(dropdownList.firstChild);
          }

          departments.forEach(function (department) {
            // if department has jobs
            if (department.jobs.length > 0) {
              // append <a> element with class .open-positions-dropdown_link to element with class .open-positions-dropdown_list
              var dropdownLink = document.createElement("a");
              dropdownLink.classList.add("open-positions-dropdown_link");
              dropdownLink.classList.add("w-dropdown-link");
              dropdownLink.innerHTML = department.name;
              dropdownLink.setAttribute("href", "#");
              // set dropdownLink tabindex to 0
              dropdownLink.setAttribute("tabindex", "0");
              document
                .querySelector(".open-positions-dropdown_list")
                .appendChild(dropdownLink);
              // add event listener to dropdownLink to detect when link is clicked
              dropdownLink.addEventListener("click", function () {
                var dropdownToggleText = document.querySelector(
                  ".open-positions-dropdown_toggle"
                ).firstChild;
                dropdownToggleText.innerHTML = department.name;
                var dropdownToggle = document.querySelector(
                  ".open-positions-dropdown_toggle"
                );
                // remove class .w--open from element with class .open-positions-dropdown_toggle
                dropdownToggle.classList.remove("w--open");
                // remove class .w--open from element with class .open-positions-dropdown_list
                dropdownList.classList.remove("w--open");
                // set aria-expanded to false on element with class .open-positions-dropdown_toggle
                dropdownToggle.setAttribute("aria-expanded", "false");
                // remove z-index from element with class .open-positions-dropdown
                document.querySelector(
                  ".open-positions-dropdown"
                ).style.zIndex = "";

                // delete all elements inside element with class .open-positions_tabs-content
                var tabContents = document.querySelectorAll(
                  ".open-positions_tabs-content"
                );
                tabContents.forEach(function (tabContent) {
                  while (tabContent.firstChild) {
                    tabContent.removeChild(tabContent.firstChild);
                  }
                });
                // get all jobs from department
                var jobs = department.jobs;
                // for each job in jobs
                jobs.forEach(function (job) {
                  // append <a> element with class .open-positions_job-link to element with class .open-positions_tabs-content
                  var jobLink = document.createElement("a");
                  jobLink.classList.add("open-positions_job-link");
                  jobLink.setAttribute("href", job.absolute_url);
                  var jobTitle = document.createElement("p");
                  jobTitle.innerHTML = job.title;
                  jobLink.appendChild(jobTitle);
                  var jobLocation = document.createElement("p");
                  jobLocation.innerHTML = job.location.name;
                  jobLocation.classList.add("paragraph-2");
                  jobLocation.classList.add("g-font-weight-regular-400");
                  jobLocation.classList.add("g-text-color-neutral-10");
                  jobLocation.classList.add("g-text-align-right");
                  jobLink.appendChild(jobLocation);
                  // set jobLink target to _blank
                  jobLink.setAttribute("target", "_blank");
                  document
                    .querySelector(".open-positions_tabs-content")
                    .appendChild(jobLink);
                });
              });
            }
          });

          // click the first link in the dropdown list
          var dropdownLinks = document.querySelectorAll(
            ".open-positions-dropdown_link"
          );
          dropdownLinks[0].click();
        }
      })
      .catch((error) => console.error(error));
  }

  // PRODUCT FEATURES

  // if page is product-features
  if (window.location.pathname === "/product-features") {
    // MOBILE DROPDOWNS

    // get innerHTML of each element with class .w-tab-pane and store in array
    var tabPanes = [];
    document.querySelectorAll(".w-tab-pane").forEach(function (tabPane) {
      tabPanes.push(tabPane.innerHTML);
    });

    // append each item in tabPanes to corresponding element with class .accordion-content_spacer
    var accordionContentSpacers = document.querySelectorAll(
      ".accordion-content_spacer"
    );

    accordionContentSpacers.forEach(function (accordionContentSpacer, index) {
      accordionContentSpacer.innerHTML = tabPanes[index];
    });

    // WF ACCESSIBILITY SNIPPET
    var accordionToggleButton = $(".accordion-trigger");
    accordionToggleButton.on("keydown", function (e) {
      // Activate on spacebar and enter
      if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
        return;
      }
      e.preventDefault();

      // Simulate a mouseclick to trigger Webflow's IX2/Interactions
      var evt = document.createEvent("MouseEvents");
      evt.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      $(this).get(0).dispatchEvent(evt);
    });

    accordionToggleButton.on("click touchend", function (e) {
      $(this).toggleAttrVal("aria-expanded", "false", "true"); //toggle trigger attribute
      $(this)
        .parent()
        .find(".accordion-content")
        .toggleAttrVal("aria-hidden", "true", "false"); //toggle content attribute
    });

    // jquery toggle just the attribute value
    $.fn.toggleAttrVal = function (attr, val1, val2) {
      var test = $(this).attr(attr);
      if (test === val1) {
        $(this).attr(attr, val2);
        return this;
      }
      if (test === val2) {
        $(this).attr(attr, val1);
        return this;
      }
      // default to val1 if neither
      $(this).attr(attr, val1);
      return this;
    };
  }

  // PRODUCT TABS URL HASH

  // if page is product-tabs
  if (window.location.pathname === "/product-features") {
    // create json object with tab names and tab ids
    var tabNames = {
      "connect-and-model": "0",
      analyze: "1",
      collaborate: "2",
      "administer-and-govern": "3",
      embed: "4"
    };

    // get hash from url
    var hash = window.location.search.split("features=")[1];

    // remove # from hash
    hash = hash.replace("#", "");

    // remove all characters after /
    hash = hash.split("/")[0];

    // remove all characters after ?
    hash = hash.split("&")[0];

    console.log(hash);

    function clickTab(hash) {
      // get value of tabNames object with key of hash
      var tabId = tabNames[hash];

      // if viewport width is less than 768px
      if (window.innerWidth < 768) {
        // click element with class .accordion-trigger and index of tabId
        document.querySelectorAll(".accordion-trigger")[tabId].click();
      }

      // if viewport width is greater than 768px
      if (window.innerWidth > 768) {
        // click child element with index of tabId of element with class .product-features-tabs_tabs-menu and then scroll to top of page
        document
          .querySelector(".product-features-tabs_tabs-menu")
          .children[tabId].click();
      }
    }

    clickTab(hash);
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);

    // if previous url is product-features
    if (document.referrer.includes("product-features")) {
      // scroll smoothly to #features
      $("html, body").animate(
        {
          scrollTop: $("#features").offset().top
        },
        1000
      );
    }

    // get all elements with attribute nav-link="product"
    var productLinks = document.querySelectorAll("[nav-link='product']");

    // for each element in productLinks add event listener
    productLinks.forEach(function (productLink) {
      productLink.addEventListener("click", function (e) {
        console.log("clicked");
        // get href of element
        var href = productLink.getAttribute("href");

        // go to href
        window.location.href = href;
        // refresh page
        window.location.reload();
      });
    });
  }

  // BLOG TABS

  // if page is blog
  if (window.location.pathname === "/blog") {
    // if viewport width is less than 768px
    if (window.innerWidth < 768) {
      // prepend searchSnippet to element with class .side-tabs-menu
      document
        .querySelector(".side-tabs-component")
        .insertAdjacentHTML("beforebegin", searchSnippet);
    } else {
      // prepend searchSnippet to element with class .side-tabs-menu
      document
        .querySelector(".side-tabs-menu")
        .insertAdjacentHTML("afterbegin", searchSnippet);
    }

    var searchInput = document.querySelector("#search");
    searchInput.addEventListener("keyup", function () {
      // set display block to .input-close
      document.querySelector(".input-close").style.display = "block";

      var searchValue = searchInput.value.toLowerCase();
      var blogPosts = document.querySelectorAll(".blog-collection_item");
      blogPosts.forEach(function (blogPost) {
        var blogPostTitle = blogPost
          .querySelector(".header-6")
          .innerText.toLowerCase();
        if (blogPostTitle.includes(searchValue)) {
          // remove class .is-hidden from element
          blogPost.classList.remove("is-hidden");
        } else {
          // add class .is-hidden to element
          blogPost.classList.add("is-hidden");
        }
      });

      // count the number of visible elements in each tab pane
      var tabPanes = document.querySelectorAll(".w-tab-pane");
      tabPanes.forEach(function (tabPane) {
        var visibleBlogPosts = tabPane.querySelectorAll(
          ".blog-collection_item:not(.is-hidden)"
        );
        var visibleBlogPostsCount = visibleBlogPosts.length;
        var tabPaneId = tabPane.getAttribute("id");
        // replace the word pane with tab in tabPaneId
        var tabId = tabPaneId.replace("pane", "tab");
        // get element with id of tabId
        var tab = document.querySelector("#" + tabId);
        var tabPaneCount = tab.querySelector(".count");
        tabPaneCount.innerText = visibleBlogPostsCount;
      });

      // get all elements with class .count
      var counts = document.querySelectorAll(".count");
      // if counts innerText is 0 set display to none
      counts.forEach(function (count) {
        if (count.innerText === "0") {
          count.style.display = "none";
        } else {
          count.style.display = "inline-block";
        }
      });

      // if search input is empty set display to none for all counts
      if (searchValue === "") {
        counts.forEach(function (count) {
          count.style.display = "none";
          // set display none to .input-close
          document.querySelector(".input-close").style.display = "none";
        });
      }
    });

    // add event listener to element with class .input-close
    document
      .querySelector(".input-close")
      .addEventListener("click", function () {
        // set value of search input to empty string
        searchInput.value = "";
        // set display none to .input-close
        document.querySelector(".input-close").style.display = "none";
        // set display none to all elements with class .count
        document.querySelectorAll(".count").forEach(function (count) {
          count.style.display = "none";
        });
        // remove class .is-hidden from all elements with class .blog-collection_item
        document
          .querySelectorAll(".blog-collection_item")
          .forEach(function (blogPost) {
            blogPost.classList.remove("is-hidden");
          });
      });

    // if screen is smaller than 768px
    if (window.innerWidth < 768) {
      // TABS FUNCTIONALITY ON MOBILE

      // add mutation observer to all elements with the class "product-tabs_tab-link" to detect when attribute "aria-selected" changes
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.attributeName === "aria-selected") {
            var target = mutation.target;
            var value = target.getAttribute("aria-selected");
            if (value === "true") {
              // set all elements with the class "product-tabs_tab-link" to display: none
              var tabs = document.querySelectorAll(".side-tab-link");
              tabs.forEach(function (tab) {
                tab.style.display = "none";
              });
              // set the target element to display: block
              target.style.display = "flex";
              target.style.borderColor = "#e2e2e2";
              target.style.backgroundImage =
                "url(https://assets.website-files.com/62a3d35f74b3a546c309e010/62f5c6ec915f956f7d97df78_chevron-small.svg)";
              // set box shadow of parent element to 0px 0px 0px 0px rgba(0, 0, 0, 0)
              target.parentElement.style.boxShadow =
                "0px 0px 0px 0px rgba(0, 0, 0, 0)";
              openTabs();
            }
          }
        });
      });

      var config = { attributes: true, attributeFilter: ["aria-selected"] };
      var productTabs = document.querySelectorAll(".side-tab-link");
      for (var i = 0; i < productTabs.length; i++) {
        observer.observe(productTabs[i], config);
      }

      function openTabs() {
        var productTabsCurrent = document.querySelectorAll(
          ".side-tab-link.w--current"
        );

        productTabsCurrent.forEach(function (productTab) {
          productTab.addEventListener("click", function () {
            // set border color of target element to #0000
            productTab.style.borderColor = "#0000";
            productTab.style.backgroundImage = "none";
            // set box shadow of parent element to 0 4px 24px 0 rgb(28 28 28 / 16%)
            productTab.parentElement.style.boxShadow =
              "0 4px 24px 0 rgba(28, 28, 28, 0.16)";
            // set all elements with the class "product-tabs_tab-link" to display:block
            var productTabs = document.querySelectorAll(".side-tab-link");
            productTabs.forEach(function (productTab) {
              productTab.style.display = "flex";
            });
          });
        });
      }

      openTabs();
    }
  }

  // CUSTOMER STORIES

  // if page is customer stories
  if (window.location.pathname === "/why-sigma-customer-stories") {
    // if viewport width is less than 768px
    if (window.innerWidth < 768) {
      // prepend searchSnippet to element with class .side-tabs-menu
      document
        .querySelector(".side-tabs-component")
        .insertAdjacentHTML("beforebegin", searchSnippet);
    } else {
      // prepend searchSnippet to element with class .side-tabs-menu
      document
        .querySelector(".side-tabs-menu")
        .insertAdjacentHTML("afterbegin", searchSnippet);
    }

    var searchInput = document.querySelector("#search");
    searchInput.addEventListener("keyup", function () {
      // set display block to .input-close
      document.querySelector(".input-close").style.display = "block";

      var searchValue = searchInput.value.toLowerCase();
      var blogPosts = document.querySelectorAll(
        ".customer-stories_collection-item"
      );
      blogPosts.forEach(function (blogPost) {
        var blogPostTitle = blogPost
          .querySelector(".paragraph-1")
          .innerText.toLowerCase();
        if (blogPostTitle.includes(searchValue)) {
          // remove class .is-hidden from element
          blogPost.classList.remove("is-hidden");
        } else {
          // add class .is-hidden to element
          blogPost.classList.add("is-hidden");
        }
      });

      // count the number of visible elements in each tab pane
      var tabPanes = document.querySelectorAll(".w-tab-pane");
      tabPanes.forEach(function (tabPane) {
        var visibleBlogPosts = tabPane.querySelectorAll(
          ".customer-stories_collection-item:not(.is-hidden)"
        );
        var visibleBlogPostsCount = visibleBlogPosts.length;
        var tabPaneId = tabPane.getAttribute("id");
        // replace the word pane with tab in tabPaneId
        var tabId = tabPaneId.replace("pane", "tab");
        // get element with id of tabId
        var tab = document.querySelector("#" + tabId);
        var tabPaneCount = tab.querySelector(".count");
        tabPaneCount.innerText = visibleBlogPostsCount;
      });

      // get all elements with class .count
      var counts = document.querySelectorAll(".count");
      // if counts innerText is 0 set display to none
      counts.forEach(function (count) {
        if (count.innerText === "0") {
          count.style.display = "none";
        } else {
          count.style.display = "inline-block";
        }
      });

      // if search input is empty set display to none for all counts
      if (searchValue === "") {
        counts.forEach(function (count) {
          count.style.display = "none";
          // set display none to .input-close
          document.querySelector(".input-close").style.display = "none";
        });
      }
    });

    // add event listener to element with class .input-close
    document
      .querySelector(".input-close")
      .addEventListener("click", function () {
        // set value of search input to empty string
        searchInput.value = "";
        // set display none to .input-close
        document.querySelector(".input-close").style.display = "none";
        // set display none to all elements with class .count
        document.querySelectorAll(".count").forEach(function (count) {
          count.style.display = "none";
        });
        // remove class .is-hidden from all elements with class .blog-collection_item
        document
          .querySelectorAll(".customer-stories_collection-item")
          .forEach(function (blogPost) {
            blogPost.classList.remove("is-hidden");
          });
      });

    // if screen is smaller than 768px
    if (window.innerWidth < 768) {
      // TABS FUNCTIONALITY ON MOBILE

      // add mutation observer to all elements with the class "product-tabs_tab-link" to detect when attribute "aria-selected" changes
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.attributeName === "aria-selected") {
            var target = mutation.target;
            var value = target.getAttribute("aria-selected");
            if (value === "true") {
              // set all elements with the class "product-tabs_tab-link" to display: none
              var tabs = document.querySelectorAll(".side-tab-link");
              tabs.forEach(function (tab) {
                tab.style.display = "none";
              });
              // set the target element to display: block
              target.style.display = "flex";
              target.style.borderColor = "#e2e2e2";
              target.style.backgroundImage =
                "url(https://assets.website-files.com/62a3d35f74b3a546c309e010/62f5c6ec915f956f7d97df78_chevron-small.svg)";
              // set box shadow of parent element to 0px 0px 0px 0px rgba(0, 0, 0, 0)
              target.parentElement.style.boxShadow =
                "0px 0px 0px 0px rgba(0, 0, 0, 0)";
              openTabs();
            }
          }
        });
      });

      var config = { attributes: true, attributeFilter: ["aria-selected"] };
      var productTabs = document.querySelectorAll(".side-tab-link");
      for (var i = 0; i < productTabs.length; i++) {
        observer.observe(productTabs[i], config);
      }

      function openTabs() {
        var productTabsCurrent = document.querySelectorAll(
          ".side-tab-link.w--current"
        );

        productTabsCurrent.forEach(function (productTab) {
          productTab.addEventListener("click", function () {
            // set border color of target element to #0000
            productTab.style.borderColor = "#0000";
            productTab.style.backgroundImage = "none";
            // set box shadow of parent element to 0 4px 24px 0 rgb(28 28 28 / 16%)
            productTab.parentElement.style.boxShadow =
              "0 4px 24px 0 rgba(28, 28, 28, 0.16)";
            // set all elements with the class "product-tabs_tab-link" to display:block
            var productTabs = document.querySelectorAll(".side-tab-link");
            productTabs.forEach(function (productTab) {
              productTab.style.display = "flex";
            });
          });
        });
      }

      openTabs();
    }
  }

  // RESOURCES PAGE

  if (window.location.pathname === "/resources") {
    // if viewport width is less than 768px
    if (window.innerWidth < 768) {
      // prepend searchSnippet to element with class .side-tabs-menu
      document
        .querySelector(".side-tabs-component")
        .insertAdjacentHTML("beforebegin", searchSnippet);
    } else {
      // prepend searchSnippet to element with class .side-tabs-menu
      document
        .querySelector(".side-tabs-menu")
        .insertAdjacentHTML("afterbegin", searchSnippet);
    }

    var searchInput = document.querySelector("#search");
    searchInput.addEventListener("keyup", function () {
      // set display block to .input-close
      document.querySelector(".input-close").style.display = "block";

      var searchValue = searchInput.value.toLowerCase();
      var blogPosts = document.querySelectorAll(".resources-collection_item");
      blogPosts.forEach(function (blogPost) {
        var blogPostTitle = blogPost
          .querySelector(".header-7")
          .innerText.toLowerCase();
        if (blogPostTitle.includes(searchValue)) {
          // remove class .is-hidden from element
          blogPost.classList.remove("is-hidden");
        } else {
          // add class .is-hidden to element
          blogPost.classList.add("is-hidden");
        }
      });

      // count the number of visible elements in each tab pane
      var tabPanes = document.querySelectorAll(".w-tab-pane");
      tabPanes.forEach(function (tabPane) {
        var visibleBlogPosts = tabPane.querySelectorAll(
          ".resources-collection_item:not(.is-hidden)"
        );
        var visibleBlogPostsCount = visibleBlogPosts.length;
        var tabPaneId = tabPane.getAttribute("id");
        // replace the word pane with tab in tabPaneId
        var tabId = tabPaneId.replace("pane", "tab");
        // get element with id of tabId
        var tab = document.querySelector("#" + tabId);
        var tabPaneCount = tab.querySelector(".count");
        tabPaneCount.innerText = visibleBlogPostsCount;
      });

      // get all elements with class .count
      var counts = document.querySelectorAll(".count");
      // if counts innerText is 0 set display to none
      counts.forEach(function (count) {
        if (count.innerText === "0") {
          count.style.display = "none";
        } else {
          count.style.display = "inline-block";
        }
      });

      // if search input is empty set display to none for all counts
      if (searchValue === "") {
        counts.forEach(function (count) {
          count.style.display = "none";
          // set display none to .input-close
          document.querySelector(".input-close").style.display = "none";
        });
      }
    });

    // add event listener to element with class .input-close
    document
      .querySelector(".input-close")
      .addEventListener("click", function () {
        // set value of search input to empty string
        searchInput.value = "";
        // set display none to .input-close
        document.querySelector(".input-close").style.display = "none";
        // set display none to all elements with class .count
        document.querySelectorAll(".count").forEach(function (count) {
          count.style.display = "none";
        });
        // remove class .is-hidden from all elements with class .blog-collection_item
        document
          .querySelectorAll(".resources-collection_item")
          .forEach(function (blogPost) {
            blogPost.classList.remove("is-hidden");
          });
      });

    // if screen is smaller than 768px
    if (window.innerWidth < 768) {
      // TABS FUNCTIONALITY ON MOBILE

      // add mutation observer to all elements with the class "product-tabs_tab-link" to detect when attribute "aria-selected" changes
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.attributeName === "aria-selected") {
            var target = mutation.target;
            var value = target.getAttribute("aria-selected");
            if (value === "true") {
              // set all elements with the class "product-tabs_tab-link" to display: none
              var tabs = document.querySelectorAll(".side-tab-link");
              tabs.forEach(function (tab) {
                tab.style.display = "none";
              });
              // set the target element to display: block
              target.style.display = "flex";
              target.style.borderColor = "#e2e2e2";
              target.style.backgroundImage =
                "url(https://assets.website-files.com/62a3d35f74b3a546c309e010/62f5c6ec915f956f7d97df78_chevron-small.svg)";
              // set box shadow of parent element to 0px 0px 0px 0px rgba(0, 0, 0, 0)
              target.parentElement.style.boxShadow =
                "0px 0px 0px 0px rgba(0, 0, 0, 0)";
              openTabs();
            }
          }
        });
      });

      var config = { attributes: true, attributeFilter: ["aria-selected"] };
      var productTabs = document.querySelectorAll(".side-tab-link");
      for (var i = 0; i < productTabs.length; i++) {
        observer.observe(productTabs[i], config);
      }

      function openTabs() {
        var productTabsCurrent = document.querySelectorAll(
          ".side-tab-link.w--current"
        );

        productTabsCurrent.forEach(function (productTab) {
          productTab.addEventListener("click", function () {
            // set border color of target element to #0000
            productTab.style.borderColor = "#0000";
            productTab.style.backgroundImage = "none";
            // set box shadow of parent element to 0 4px 24px 0 rgb(28 28 28 / 16%)
            productTab.parentElement.style.boxShadow =
              "0 4px 24px 0 rgba(28, 28, 28, 0.16)";
            // set all elements with the class "product-tabs_tab-link" to display:block
            var productTabs = document.querySelectorAll(".side-tab-link");
            productTabs.forEach(function (productTab) {
              productTab.style.display = "flex";
            });
          });
        });
      }

      openTabs();
    }

    // Link to tab links

    // get hash from url
    var hash = window.location.search.split("category=")[1];

    // remove # from hash
    hash = hash.replace("#", "");

    // remove all characters after /
    hash = hash.split("/")[0];

    // remove all characters after ?
    hash = hash.split("&")[0];

    function clickTab(hash) {
      // click element with attribute resource-tab-link="tabId"
      document.querySelector("[resource-tab-link='" + hash + "']").click();
    }

    clickTab(hash);
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);

    // get all elements with attribute nav-link="product"
    var productLinks = document.querySelectorAll("[nav-link='resources']");

    // for each element in productLinks add event listener
    productLinks.forEach(function (productLink) {
      productLink.addEventListener("click", function (e) {
        // get href of element
        var href = productLink.getAttribute("href");

        // go to href
        window.location.href = href;
        // refresh page
        window.location.reload();
      });
    });
  }

  // SLIDER

  // if element with class .slider exists
  if (document.querySelector(".slider")) {
    $(document).ready(function () {
      $(".div-put").last().append($(".slider_slide").clone());
    });
  }

  // ADD CODE BEFORE THIS LINE
});
