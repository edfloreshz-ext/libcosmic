(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1915\">source</a><a href=\"#impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.rwlock\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1917\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.rwlock\" class=\"fn\">rwlock</a>(s: &amp;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;) -&gt; &amp;'a <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a reference to the original reader-writer lock object.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocked\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1926-1928\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.unlocked\" class=\"fn\">unlocked</a>&lt;F, U&gt;(s: &amp;mut <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;, f: F) -&gt; U<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; U,</span></h4></section></summary><div class=\"docblock\"><p>Temporarily unlocks the <code>RwLock</code> to execute the given function.</p>\n<p>This is safe because <code>&amp;mut</code> guarantees that there exist no other\nreferences to the data protected by the <code>RwLock</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.upgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1940\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.upgrade\" class=\"fn\">upgrade</a>(\n    s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;\n) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockWriteGuard.html\" title=\"struct lock_api::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Atomically upgrades an upgradable read lock lock into an exclusive write lock,\nblocking the current thread until it can be acquired.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_upgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1956\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.try_upgrade\" class=\"fn\">try_upgrade</a>(\n    s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockWriteGuard.html\" title=\"struct lock_api::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;, <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Tries to atomically upgrade an upgradable read lock into an exclusive write lock.</p>\n<p>If the access could not be granted at this time, then the current guard is returned.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLockUpgradableReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1971\">source</a><a href=\"#impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgradeFair.html\" title=\"trait lock_api::rwlock::RawRwLockUpgradeFair\">RawRwLockUpgradeFair</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlock_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1985\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.unlock_fair\" class=\"fn\">unlock_fair</a>(s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Unlocks the <code>RwLock</code> using a fair unlock protocol.</p>\n<p>By default, <code>RwLock</code> is unfair and allow the current thread to re-lock\nthe <code>RwLock</code> before another has the chance to acquire the lock, even if\nthat thread has been blocked on the <code>RwLock</code> for a long time. This is\nthe default because it allows much higher throughput as it avoids\nforcing a context switch on every <code>RwLock</code> unlock. This can result in one\nthread acquiring a <code>RwLock</code> many more times than other threads.</p>\n<p>However in some cases it can be beneficial to ensure fairness by forcing\nthe lock to pass on to a waiting thread if there is one. This is done by\nusing this method instead of dropping the <code>RwLockUpgradableReadGuard</code> normally.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocked_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2000-2002\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.unlocked_fair\" class=\"fn\">unlocked_fair</a>&lt;F, U&gt;(\n    s: &amp;mut <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;,\n    f: F\n) -&gt; U<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; U,</span></h4></section></summary><div class=\"docblock\"><p>Temporarily unlocks the <code>RwLock</code> to execute the given function.</p>\n<p>The <code>RwLock</code> is unlocked a fair unlock protocol.</p>\n<p>This is safe because <code>&amp;mut</code> guarantees that there exist no other\nreferences to the data protected by the <code>RwLock</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bump\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2018\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.bump\" class=\"fn\">bump</a>(s: &amp;mut <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Temporarily yields the <code>RwLock</code> to a waiting thread if there is one.</p>\n<p>This method is functionally equivalent to calling <code>unlock_fair</code> followed\nby <code>upgradable_read</code>, however it can be much more efficient in the case where there\nare no waiting threads.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLockUpgradableReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2026\">source</a><a href=\"#impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgradeDowngrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgradeDowngrade\">RawRwLockUpgradeDowngrade</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.downgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2034\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.downgrade\" class=\"fn\">downgrade</a>(\n    s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;\n) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Atomically downgrades an upgradable read lock lock into a shared read lock\nwithout allowing any writers to take exclusive access of the lock in the\nmeantime.</p>\n<p>Note that if there are any writers currently waiting to take the lock\nthen other readers may not be able to acquire the lock even if it was\ndowngraded.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_upgraded\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2057\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.with_upgraded\" class=\"fn\">with_upgraded</a>&lt;Ret, F&gt;(&amp;mut self, f: F) -&gt; Ret<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/core/primitive.reference.html\">&amp;mut T</a>) -&gt; Ret,</span></h4></section></summary><div class=\"docblock\"><p>First, atomically upgrades an upgradable read lock lock into an exclusive write lock,\nblocking the current thread until it can be acquired.</p>\n<p>Then, calls the provided closure with an exclusive reference to the lock’s data.</p>\n<p>Finally, atomically downgrades the lock back to an upgradable read lock.\nThe closure’s return value is wrapped in <code>Some</code> and returned.</p>\n<p>This function only requires a mutable reference to the guard, unlike\n<code>upgrade</code> which takes the guard by value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_with_upgraded\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2082\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.try_with_upgraded\" class=\"fn\">try_with_upgraded</a>&lt;Ret, F&gt;(&amp;mut self, f: F) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ret&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/core/primitive.reference.html\">&amp;mut T</a>) -&gt; Ret,</span></h4></section></summary><div class=\"docblock\"><p>First, tries to atomically upgrade an upgradable read lock into an exclusive write lock.</p>\n<p>If the access could not be granted at this time, then <code>None</code> is returned.</p>\n<p>Otherwise, calls the provided closure with an exclusive reference to the lock’s data,\nand finally downgrades the lock back to an upgradable read lock.\nThe closure’s return value is wrapped in <code>Some</code> and returned.</p>\n<p>This function only requires a mutable reference to the guard, unlike\n<code>try_upgrade</code> which takes the guard by value.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLockUpgradableReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2098\">source</a><a href=\"#impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgradeTimed.html\" title=\"trait lock_api::rwlock::RawRwLockUpgradeTimed\">RawRwLockUpgradeTimed</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_upgrade_for\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2104-2107\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.try_upgrade_for\" class=\"fn\">try_upgrade_for</a>(\n    s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Duration\" title=\"type lock_api::rwlock::RawRwLockTimed::Duration\">Duration</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockWriteGuard.html\" title=\"struct lock_api::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;, <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Tries to atomically upgrade an upgradable read lock into an exclusive\nwrite lock, until a timeout is reached.</p>\n<p>If the access could not be granted before the timeout expires, then\nthe current guard is returned.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_upgrade_until\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2127-2130\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.try_upgrade_until\" class=\"fn\">try_upgrade_until</a>(\n    s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Instant\" title=\"type lock_api::rwlock::RawRwLockTimed::Instant\">Instant</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockWriteGuard.html\" title=\"struct lock_api::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;, <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Tries to atomically upgrade an upgradable read lock into an exclusive\nwrite lock, until a timeout is reached.</p>\n<p>If the access could not be granted before the timeout expires, then\nthe current guard is returned.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLockUpgradableReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2145-2146\">source</a><a href=\"#impl-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgradeTimed.html\" title=\"trait lock_api::rwlock::RawRwLockUpgradeTimed\">RawRwLockUpgradeTimed</a> + <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgradeDowngrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgradeDowngrade\">RawRwLockUpgradeDowngrade</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_with_upgraded_for\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2160-2164\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.try_with_upgraded_for\" class=\"fn\">try_with_upgraded_for</a>&lt;Ret, F&gt;(\n    &amp;mut self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Duration\" title=\"type lock_api::rwlock::RawRwLockTimed::Duration\">Duration</a>,\n    f: F\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ret&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/core/primitive.reference.html\">&amp;mut T</a>) -&gt; Ret,</span></h4></section></summary><div class=\"docblock\"><p>Tries to atomically upgrade an upgradable read lock into an exclusive\nwrite lock, until a timeout is reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned.</p>\n<p>Otherwise, calls the provided closure with an exclusive reference to the lock’s data,\nand finally downgrades the lock back to an upgradable read lock.\nThe closure’s return value is wrapped in <code>Some</code> and returned.</p>\n<p>This function only requires a mutable reference to the guard, unlike\n<code>try_upgrade_for</code> which takes the guard by value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_with_upgraded_until\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2191-2195\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html#tymethod.try_with_upgraded_until\" class=\"fn\">try_with_upgraded_until</a>&lt;Ret, F&gt;(\n    &amp;mut self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html\" title=\"trait lock_api::rwlock::RawRwLockTimed\">RawRwLockTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/rwlock/trait.RawRwLockTimed.html#associatedtype.Instant\" title=\"type lock_api::rwlock::RawRwLockTimed::Instant\">Instant</a>,\n    f: F\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ret&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/core/primitive.reference.html\">&amp;mut T</a>) -&gt; Ret,</span></h4></section></summary><div class=\"docblock\"><p>Tries to atomically upgrade an upgradable read lock into an exclusive\nwrite lock, until a timeout is reached.</p>\n<p>If the access could not be granted before the timeout expires, then\n<code>None</code> is returned.</p>\n<p>Otherwise, calls the provided closure with an exclusive reference to the lock’s data,\nand finally downgrades the lock back to an upgradable read lock.\nThe closure’s return value is wrapped in <code>Some</code> and returned.</p>\n<p>This function only requires a mutable reference to the guard, unlike\n<code>try_upgrade_until</code> which takes the guard by value.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLockUpgradableReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2219\">source</a><a href=\"#impl-Drop-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2221\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","spin::lock_api::RwLockUpgradableReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2229-2230\">source</a><a href=\"#impl-Debug-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2232\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/core/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spin::lock_api::RwLockUpgradableReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2211\">source</a><a href=\"#impl-Deref-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2214\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/core/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","spin::lock_api::RwLockUpgradableReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2237-2238\">source</a><a href=\"#impl-Display-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#2240\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/core/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","spin::lock_api::RwLockUpgradableReadGuard"],["<section id=\"impl-Sync-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1910-1911\">source</a><a href=\"#impl-Sync-for-RwLockUpgradableReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::rwlock::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::rwlock::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h3></section>","Sync","spin::lock_api::RwLockUpgradableReadGuard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()