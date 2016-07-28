System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return ["Courses1", "Courses2", "courses3"];
                };
                // testing:
                CourseService.prototype.getAuthors = function () {
                    return ['Tiki', 'Pansib', 'Mulaan', 'Erwin', 'TJ'];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map