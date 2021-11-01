/* Serenade Custom Commands

In this file, you can define your own custom commands with the Serenade API.

For instance, here's a custom automation that opens your terminal and runs a command:

serenade.global().command("make", api => {
  api.focusApplication("terminal");
  api.typeText("make clean && make");
  api.pressKey("return");
});

And, here's a Python snippet for creating a test method:

serenade.language("python").snippet(
  "test method <%identifier%>",
  "def test_<%identifier%>(self):<%newline%><%indent%>pass",
  { "identifier": ["underscores"] }
  "method"
);

For more information, check out the Serenade API documentation: https://serenade.ai/docs/api

*/

serenade.global().command("restart rails", (api) => {
  api.focusOrLaunchApplication("i term");
  api.pressKey("1", ["command"]);
  api.pressKey("c", ["control"]);
  api.pressKey("up");
  api.pressKey("enter");
});

serenade.global().command("check status", (api) => {
  api.focusOrLaunchApplication("i term");
  api.typeText("git status");
  api.pressKey("enter");
});

serenade.global().command("check diff", (api) => {
  api.focusOrLaunchApplication("i term");
  api.typeText("git diff");
  api.pressKey("enter");
});

serenade.global().command("pry", (api) => {
  api.typeText("binding.pry");
});

serenade.global().command("chrome", (api) => {
  api.focusOrLaunchApplication("chrome");
});

serenade.global().command("slack", (api) => {
  api.focusOrLaunchApplication("slack");
});

serenade.global().command("visual", (api) => {
  api.focusOrLaunchApplication("visual");
});

serenade.global().command("terminal", (api) => {
  api.focusOrLaunchApplication("i term");
});

serenade.global().command("discord", (api) => {
  api.focusOrLaunchApplication("discord");
});

serenade.global().command("minimize", (api) => {
  api.pressKey("m", ["command"]);
});

serenade.global().command("restart rails", (api) => {
  api.pressKey("1", ["command"]);
});

serenade.app("chrome").command("find <%text%>", async (api, matches) => {
  await api.pressKey("f", ["command"]);
  await api.typeText(matches.text);
});

serenade.global().command("screenshot", (api) => {
  api.pressKey("4", ["command", "shift"]);
});

serenade.global().command("parse <%text%>", async (api, matches) => {
  await api.pressKey("f", ["command"]);
  await api.typeText(matches.text);
});

serenade.global().command("double click", async (api) => {
  await api.command("click");
  await api.command("click");
});

serenade.global().command("messages", (api) => {
  api.focusOrLaunchApplication("messages");
});

serenade.global().command("lock computer", (api) => {
  api.pressKey("q", ["command", "control"]);
});

serenade.global().command("slap", async (api) => {
  await api.pressKey("escape");
  await api.pressKey("enter");
});

serenade.global().command("next", (api) => {
  api.pressKey("enter");
});

serenade.global().command("previous", (api) => {
  api.pressKey("enter", ["shift"]);
});

serenade.global().command("recurse <%text%>", async (api, matches) => {
  await api.pressKey("r", ["control"]);
	await api.typeText(matches.text);
});

// to do
serenade.app("iTerm").command("clear", (api) => {
  api.pressKey("c", ["control"]);
});

serenade.app("chrome").command("inspect", (api) => {
  api.pressKey("c", ["command", "shift"]);
});
