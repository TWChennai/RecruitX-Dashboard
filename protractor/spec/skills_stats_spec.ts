describe('skills status', function() {
    it('should have a title really..', function() {
       let skillsStatsPage = browser.get('http://localhost:8080/');
        expect(browser.getTitle()).toEqual('RecruitX');
    });
});