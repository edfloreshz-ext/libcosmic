(function() {var type_impls = {
"notify":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-INotifyWatcher\" class=\"impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#565-571\">source</a><a href=\"#impl-Drop-for-INotifyWatcher\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"notify/inotify/struct.INotifyWatcher.html\" title=\"struct notify::inotify::INotifyWatcher\">INotifyWatcher</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#566-570\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","notify::RecommendedWatcher"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-INotifyWatcher\" class=\"impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#44\">source</a><a href=\"#impl-Debug-for-INotifyWatcher\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"notify/inotify/struct.INotifyWatcher.html\" title=\"struct notify::inotify::INotifyWatcher\">INotifyWatcher</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#44\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","notify::RecommendedWatcher"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Watcher-for-INotifyWatcher\" class=\"impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#539-563\">source</a><a href=\"#impl-Watcher-for-INotifyWatcher\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"notify/trait.Watcher.html\" title=\"trait notify::Watcher\">Watcher</a> for <a class=\"struct\" href=\"notify/inotify/struct.INotifyWatcher.html\" title=\"struct notify::inotify::INotifyWatcher\">INotifyWatcher</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#541-543\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"notify/trait.Watcher.html#tymethod.new\" class=\"fn\">new</a>&lt;F: <a class=\"trait\" href=\"notify/trait.EventHandler.html\" title=\"trait notify::EventHandler\">EventHandler</a>&gt;(event_handler: F, _config: <a class=\"struct\" href=\"notify/struct.Config.html\" title=\"struct notify::Config\">Config</a>) -&gt; <a class=\"type\" href=\"notify/type.Result.html\" title=\"type notify::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new watcher.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.watch\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#545-547\">source</a><a href=\"#method.watch\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"notify/trait.Watcher.html#tymethod.watch\" class=\"fn\">watch</a>(&amp;mut self, path: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>, recursive_mode: <a class=\"enum\" href=\"notify/enum.RecursiveMode.html\" title=\"enum notify::RecursiveMode\">RecursiveMode</a>) -&gt; <a class=\"type\" href=\"notify/type.Result.html\" title=\"type notify::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Begin watching a new path. <a href=\"notify/trait.Watcher.html#tymethod.watch\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unwatch\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#549-551\">source</a><a href=\"#method.unwatch\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"notify/trait.Watcher.html#tymethod.unwatch\" class=\"fn\">unwatch</a>(&amp;mut self, path: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>) -&gt; <a class=\"type\" href=\"notify/type.Result.html\" title=\"type notify::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Stop watching a path. <a href=\"notify/trait.Watcher.html#tymethod.unwatch\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.configure\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#553-558\">source</a><a href=\"#method.configure\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"notify/trait.Watcher.html#method.configure\" class=\"fn\">configure</a>(&amp;mut self, config: <a class=\"struct\" href=\"notify/struct.Config.html\" title=\"struct notify::Config\">Config</a>) -&gt; <a class=\"type\" href=\"notify/type.Result.html\" title=\"type notify::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class='docblock'>Configure the watcher at runtime. <a href=\"notify/trait.Watcher.html#method.configure\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.kind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/notify/inotify.rs.html#560-562\">source</a><a href=\"#method.kind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"notify/trait.Watcher.html#tymethod.kind\" class=\"fn\">kind</a>() -&gt; <a class=\"enum\" href=\"notify/enum.WatcherKind.html\" title=\"enum notify::WatcherKind\">WatcherKind</a></h4></section></summary><div class='docblock'>Returns the watcher kind, allowing to perform backend-specific tasks</div></details></div></details>","Watcher","notify::RecommendedWatcher"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()