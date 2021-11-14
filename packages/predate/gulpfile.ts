import { dest, series, task } from "gulp";
import { createProject } from "gulp-typescript";
import del from "del";
import merge from "merge2";

const tsProject = createProject("tsconfig.json");
const stream = tsProject.src().pipe(tsProject());

task("clean-up", () => {
  return del("dist/**", {
    force: true,
  });
});

task("build-typescript", () => {
  return merge([stream.js.pipe(dest("dist/")), stream.dts.pipe(dest("dist/"))]);
});

task("default", series("clean-up", "build-typescript"));
