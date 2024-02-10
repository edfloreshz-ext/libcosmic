(function() {var type_impls = {
"iced":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Event%3CEp,+Cp%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#40\">source</a><a href=\"#impl-Event%3CEp,+Cp%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ep, Cp&gt; <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Ep, Cp&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.is_edge\" class=\"method\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#41\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/enum.Event.html#tymethod.is_edge\" class=\"fn\">is_edge</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.from\" class=\"method\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#51-53\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/enum.Event.html#tymethod.from\" class=\"fn\">from</a>(&amp;self) -&gt; Ep<span class=\"where fmt-newline\">where\n    Ep: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h4></section><section id=\"method.to\" class=\"method\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#64-66\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/enum.Event.html#tymethod.to\" class=\"fn\">to</a>(&amp;self) -&gt; Ep<span class=\"where fmt-newline\">where\n    Ep: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h4></section><section id=\"method.with_points\" class=\"method\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#77-80\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/enum.Event.html#tymethod.with_points\" class=\"fn\">with_points</a>(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Point2D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Point2D\">Point2D</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>&gt;, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Point2D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Point2D\">Point2D</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>&gt;&gt;<span class=\"where fmt-newline\">where\n    Ep: <a class=\"trait\" href=\"iced/widget/canvas/path/lyon_path/trait.Position.html\" title=\"trait iced::widget::canvas::path::lyon_path::Position\">Position</a>,\n    Cp: <a class=\"trait\" href=\"iced/widget/canvas/path/lyon_path/trait.Position.html\" title=\"trait iced::widget::canvas::path::lyon_path::Position\">Position</a>,</span></h4></section></div></details>",0,"iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Event%3CPoint2D%3Cf32,+UnknownUnit%3E,+Point2D%3Cf32,+UnknownUnit%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#113\">source</a><a href=\"#impl-Event%3CPoint2D%3Cf32,+UnknownUnit%3E,+Point2D%3Cf32,+UnknownUnit%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Point2D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Point2D\">Point2D</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>&gt;, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Point2D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Point2D\">Point2D</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.transformed\" class=\"method\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#114\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/enum.Event.html#tymethod.transformed\" class=\"fn\">transformed</a>&lt;T&gt;(\n    &amp;self,\n    mat: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;T</a>\n) -&gt; <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Point2D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Point2D\">Point2D</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>&gt;, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Point2D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Point2D\">Point2D</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>&gt;&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"iced/widget/canvas/path/lyon_path/geom/traits/trait.Transformation.html\" title=\"trait iced::widget::canvas::path::lyon_path::geom::traits::Transformation\">Transformation</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>&gt;,</span></h4></section></div></details>",0,"iced::widget::canvas::path::lyon_path::PathEvent"],["<section id=\"impl-Copy-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#impl-Copy-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Endpoint, ControlPoint&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;<span class=\"where fmt-newline\">where\n    Endpoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    ControlPoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span></h3></section>","Copy","iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"],["<section id=\"impl-StructuralPartialEq-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#impl-StructuralPartialEq-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Endpoint, ControlPoint&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;</h3></section>","StructuralPartialEq","iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#impl-PartialEq-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Endpoint, ControlPoint&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;<span class=\"where fmt-newline\">where\n    Endpoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    ControlPoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"],["<section id=\"impl-Eq-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#impl-Eq-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Endpoint, ControlPoint&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;<span class=\"where fmt-newline\">where\n    Endpoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    ControlPoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span></h3></section>","Eq","iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#impl-Debug-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Endpoint, ControlPoint&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;<span class=\"where fmt-newline\">where\n    Endpoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    ControlPoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#impl-Clone-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Endpoint, ControlPoint&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;<span class=\"where fmt-newline\">where\n    Endpoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    ControlPoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#impl-Hash-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Endpoint, ControlPoint&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;<span class=\"where fmt-newline\">where\n    Endpoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    ControlPoint: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __H</a>)<span class=\"where fmt-newline\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</span></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"],["<section id=\"impl-StructuralEq-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/events.rs.html#6\">source</a><a href=\"#impl-StructuralEq-for-Event%3CEndpoint,+ControlPoint%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Endpoint, ControlPoint&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"iced/widget/canvas/path/lyon_path/enum.Event.html\" title=\"enum iced::widget::canvas::path::lyon_path::Event\">Event</a>&lt;Endpoint, ControlPoint&gt;</h3></section>","StructuralEq","iced::widget::canvas::path::lyon_path::PathEvent","iced::widget::canvas::path::lyon_path::IdEvent"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()