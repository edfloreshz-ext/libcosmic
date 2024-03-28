(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Builder%3C'a,+Message,+Variant%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><a href=\"#impl-Builder%3C'a,+Message,+Variant%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Variant&gt; <a class=\"struct\" href=\"cosmic/widget/button/struct.Builder.html\" title=\"struct cosmic::widget::button::Builder\">Builder</a>&lt;'a, Message, Variant&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.id\" class=\"fn\">id</a>(self, value: <a class=\"struct\" href=\"cosmic/widget/struct.Id.html\" title=\"struct cosmic::widget::Id\">Id</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"cosmic/widget/struct.Id.html\" title=\"struct cosmic::widget::Id\"><code>Id</code></a> of the button.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.label\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.label\" class=\"fn\">label</a>(self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>The label to display within the button.</p>\n</div></details><section id=\"method.tooltip\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.tooltip\" class=\"fn\">tooltip</a>(self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;&gt;) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_press\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.on_press\" class=\"fn\">on_press</a>(self, value: Message) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the message that will be produced when the button is pressed.</p>\n<p>If <code>None</code>, the button will be disabled.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.width\" class=\"fn\">width</a>(self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the preferred width of the button.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.height\" class=\"fn\">height</a>(self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the preferred height of the button.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.padding\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.padding\" class=\"fn\">padding</a>(self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/padding/struct.Padding.html\" title=\"struct iced_core::padding::Padding\">Padding</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the preferred padding of the button.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spacing\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.spacing\" class=\"fn\">spacing</a>(self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the preferred spacing between elements in the button.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.icon_size\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.icon_size\" class=\"fn\">icon_size</a>(self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the preferred size of icons.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.line_height\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.line_height\" class=\"fn\">line_height</a>(self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the prefered font line height.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.font_size\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.font_size\" class=\"fn\">font_size</a>(self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the preferred font size.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.font_weight\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.font_weight\" class=\"fn\">font_weight</a>(self, value: <a class=\"enum\" href=\"iced_core/font/enum.Weight.html\" title=\"enum iced_core::font::Weight\">Weight</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the preferred font weight.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.style\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.style\" class=\"fn\">style</a>(self, value: <a class=\"enum\" href=\"cosmic/theme/style/enum.Button.html\" title=\"enum cosmic::theme::style::Button\">Style</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>The preferred style of the button.</p>\n</div></details></div></details>",0,"cosmic::widget::button::link::Button","cosmic::widget::button::icon::Button","cosmic::widget::button::image::Button","cosmic::widget::button::text::Button"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Builder%3C'a,+Message,+Variant%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#108-114\">source</a><a href=\"#impl-Builder%3C'a,+Message,+Variant%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Variant&gt; <a class=\"struct\" href=\"cosmic/widget/button/struct.Builder.html\" title=\"struct cosmic::widget::button::Builder\">Builder</a>&lt;'a, Message, Variant&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_press_maybe\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/button/mod.rs.html#110-113\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/button/struct.Builder.html#tymethod.on_press_maybe\" class=\"fn\">on_press_maybe</a>(self, on_press: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Message&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set the value of [<code>on_press</code>] as either <code>Some</code> or <code>None</code>.</p>\n</div></details></div></details>",0,"cosmic::widget::button::link::Button","cosmic::widget::button::icon::Button","cosmic::widget::button::image::Button","cosmic::widget::button::text::Button"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()