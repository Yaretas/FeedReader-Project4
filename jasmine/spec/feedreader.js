/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('url defined and not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        it('Name defined and not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });

    });


    describe('The menu', function() {
        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        it('toggles correctly', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });



    describe('Initial Entries', function() {
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('completes task', function(){
            const feed = $('.feed .entry');
            expect(feed.length).toBeGreaterThan(0);
        });
    });



    describe('New Feed Selection', function() {
        beforeEach(function(done) {
            loadFeed(1, function() {
                feed1 = document.querySelector('.feed').innerHTML;
                loadFeed(0, function() {
                    feed2 = document.querySelector('.feed').innerHTML;
                    done();
                });
        });
    });
    it('If Pages change', function() {
            expect(feed1).not.toBe(feed2);
    });
    });
}());
