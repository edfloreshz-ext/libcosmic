(function() {var type_impls = {
"iced_futures":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ThreadPool\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#75\">source</a><a href=\"#impl-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"futures_executor/thread_pool/struct.ThreadPool.html\" title=\"struct futures_executor::thread_pool::ThreadPool\">ThreadPool</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#81\">source</a><h4 class=\"code-header\">pub fn <a href=\"futures_executor/thread_pool/struct.ThreadPool.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"futures_executor/thread_pool/struct.ThreadPool.html\" title=\"struct futures_executor::thread_pool::ThreadPool\">ThreadPool</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new thread pool with the default configuration.</p>\n<p>See documentation for the methods in\n<a href=\"futures_executor/thread_pool/struct.ThreadPoolBuilder.html\" title=\"struct futures_executor::thread_pool::ThreadPoolBuilder\"><code>ThreadPoolBuilder</code></a> for details on the default\nconfiguration.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.builder\" class=\"method\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#90\">source</a><h4 class=\"code-header\">pub fn <a href=\"futures_executor/thread_pool/struct.ThreadPool.html#tymethod.builder\" class=\"fn\">builder</a>() -&gt; <a class=\"struct\" href=\"futures_executor/thread_pool/struct.ThreadPoolBuilder.html\" title=\"struct futures_executor::thread_pool::ThreadPoolBuilder\">ThreadPoolBuilder</a></h4></section></summary><div class=\"docblock\"><p>Create a default thread pool configuration, which can then be customized.</p>\n<p>See documentation for the methods in\n<a href=\"futures_executor/thread_pool/struct.ThreadPoolBuilder.html\" title=\"struct futures_executor::thread_pool::ThreadPoolBuilder\"><code>ThreadPoolBuilder</code></a> for details on the default\nconfiguration.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spawn_obj_ok\" class=\"method\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#98\">source</a><h4 class=\"code-header\">pub fn <a href=\"futures_executor/thread_pool/struct.ThreadPool.html#tymethod.spawn_obj_ok\" class=\"fn\">spawn_obj_ok</a>(&amp;self, future: <a class=\"struct\" href=\"futures_task/future_obj/struct.FutureObj.html\" title=\"struct futures_task::future_obj::FutureObj\">FutureObj</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Spawns a future that will be run to completion.</p>\n<blockquote>\n<p><strong>Note</strong>: This method is similar to <code>Spawn::spawn_obj</code>, except that\nit is guaranteed to always succeed.</p>\n</blockquote>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spawn_ok\" class=\"method\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#124-126\">source</a><h4 class=\"code-header\">pub fn <a href=\"futures_executor/thread_pool/struct.ThreadPool.html#tymethod.spawn_ok\" class=\"fn\">spawn_ok</a>&lt;Fut&gt;(&amp;self, future: Fut)<span class=\"where fmt-newline\">where\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</span></h4></section></summary><div class=\"docblock\"><p>Spawns a task that polls the given future with output <code>()</code> to\ncompletion.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>futures::executor::ThreadPool;\n\n<span class=\"kw\">let </span>pool = ThreadPool::new().unwrap();\n\n<span class=\"kw\">let </span>future = <span class=\"kw\">async </span>{ <span class=\"comment\">/* ... */ </span>};\npool.spawn_ok(future);</code></pre></div>\n<blockquote>\n<p><strong>Note</strong>: This method is similar to <code>SpawnExt::spawn</code>, except that\nit is guaranteed to always succeed.</p>\n</blockquote>\n</div></details></div></details>",0,"iced_futures::backend::native::thread_pool::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ThreadPool\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#55\">source</a><a href=\"#impl-Debug-for-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"futures_executor/thread_pool/struct.ThreadPool.html\" title=\"struct futures_executor::thread_pool::ThreadPool\">ThreadPool</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#56\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced_futures::backend::native::thread_pool::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ThreadPool\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#167\">source</a><a href=\"#impl-Clone-for-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"futures_executor/thread_pool/struct.ThreadPool.html\" title=\"struct futures_executor::thread_pool::ThreadPool\">ThreadPool</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#168\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"futures_executor/thread_pool/struct.ThreadPool.html\" title=\"struct futures_executor::thread_pool::ThreadPool\">ThreadPool</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iced_futures::backend::native::thread_pool::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-ThreadPool\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#174\">source</a><a href=\"#impl-Drop-for-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_executor/thread_pool/struct.ThreadPool.html\" title=\"struct futures_executor::thread_pool::ThreadPool\">ThreadPool</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#175\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","iced_futures::backend::native::thread_pool::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Spawn-for-ThreadPool\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#132\">source</a><a href=\"#impl-Spawn-for-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"futures_task/spawn/trait.Spawn.html\" title=\"trait futures_task::spawn::Spawn\">Spawn</a> for <a class=\"struct\" href=\"futures_executor/thread_pool/struct.ThreadPool.html\" title=\"struct futures_executor::thread_pool::ThreadPool\">ThreadPool</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.spawn_obj\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_executor/thread_pool.rs.html#133\">source</a><a href=\"#method.spawn_obj\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"futures_task/spawn/trait.Spawn.html#tymethod.spawn_obj\" class=\"fn\">spawn_obj</a>(&amp;self, future: <a class=\"struct\" href=\"futures_task/future_obj/struct.FutureObj.html\" title=\"struct futures_task::future_obj::FutureObj\">FutureObj</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"futures_task/spawn/struct.SpawnError.html\" title=\"struct futures_task::spawn::SpawnError\">SpawnError</a>&gt;</h4></section></summary><div class='docblock'>Spawns a future that will be run to completion. <a href=\"futures_task/spawn/trait.Spawn.html#tymethod.spawn_obj\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.status\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_task/spawn.rs.html#24\">source</a><a href=\"#method.status\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"futures_task/spawn/trait.Spawn.html#method.status\" class=\"fn\">status</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"futures_task/spawn/struct.SpawnError.html\" title=\"struct futures_task::spawn::SpawnError\">SpawnError</a>&gt;</h4></section></summary><div class='docblock'>Determines whether the executor is able to spawn new tasks. <a href=\"futures_task/spawn/trait.Spawn.html#method.status\">Read more</a></div></details></div></details>","Spawn","iced_futures::backend::native::thread_pool::Executor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()