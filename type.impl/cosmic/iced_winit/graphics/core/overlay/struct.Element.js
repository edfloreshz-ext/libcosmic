(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Element%3C'a,+Message,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#20-22\">source</a><a href=\"#impl-Element%3C'a,+Message,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Renderer.html\" title=\"trait cosmic::iced_winit::graphics::core::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#25-28\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.new\" class=\"fn\">new</a>(\n    position: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Point.html\" title=\"struct cosmic::iced_winit::graphics::core::Point\">Point</a>,\n    overlay: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Overlay.html\" title=\"trait cosmic::iced_winit::graphics::core::Overlay\">Overlay</a>&lt;Message, Theme, Renderer&gt; + 'a&gt;\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a> containing the given <a href=\"cosmic/iced_winit/graphics/core/trait.Overlay.html\" title=\"trait cosmic::iced_winit::graphics::core::Overlay\"><code>Overlay</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.position\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#37\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.position\" class=\"fn\">position</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Point.html\" title=\"struct cosmic::iced_winit::graphics::core::Point\">Point</a></h4></section></summary><div class=\"docblock\"><p>Returns the position of the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.translate\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#42\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.translate\" class=\"fn\">translate</a>(\n    self,\n    translation: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Vector.html\" title=\"struct cosmic::iced_winit::graphics::core::Vector\">Vector</a>\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Translates the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#49-57\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.map\" class=\"fn\">map</a>&lt;B&gt;(\n    self,\n    f: &amp;'a dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(Message) -&gt; B\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'a, B, Theme, Renderer&gt;<div class=\"where\">where\n    Message: 'a,\n    Theme: 'a,\n    Renderer: 'a,\n    B: 'a,</div></h4></section></summary><div class=\"docblock\"><p>Applies a transformation to the produced message of the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.layout\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#67-72\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.layout\" class=\"fn\">layout</a>(\n    &amp;mut self,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    bounds: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a>,\n    translation: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Vector.html\" title=\"struct cosmic::iced_winit::graphics::core::Vector\">Vector</a>\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/layout/struct.Node.html\" title=\"struct cosmic::iced_winit::graphics::core::layout::Node\">Node</a></h4></section></summary><div class=\"docblock\"><p>Computes the layout of the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a> in the given bounds.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_event\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#82-90\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.on_event\" class=\"fn\">on_event</a>(\n    &amp;mut self,\n    event: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Event.html\" title=\"enum cosmic::iced_winit::graphics::core::Event\">Event</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    clipboard: &amp;mut dyn <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Clipboard.html\" title=\"trait cosmic::iced_winit::graphics::core::Clipboard\">Clipboard</a>,\n    shell: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Shell.html\" title=\"struct cosmic::iced_winit::graphics::core::Shell\">Shell</a>&lt;'_, Message&gt;\n) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/event/enum.Status.html\" title=\"enum cosmic::iced_winit::graphics::core::event::Status\">Status</a></h4></section></summary><div class=\"docblock\"><p>Processes a runtime <a href=\"cosmic/iced_winit/graphics/core/enum.Event.html\" title=\"enum cosmic::iced_winit::graphics::core::Event\"><code>Event</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mouse_interaction\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#96-102\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.mouse_interaction\" class=\"fn\">mouse_interaction</a>(\n    &amp;self,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Rectangle.html\" title=\"struct cosmic::iced_winit::graphics::core::Rectangle\">Rectangle</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Interaction.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Interaction\">Interaction</a></h4></section></summary><div class=\"docblock\"><p>Returns the current <a href=\"cosmic/iced_winit/graphics/core/mouse/enum.Interaction.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Interaction\"><code>mouse::Interaction</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#108-115\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;mut Renderer</a>,\n    theme: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Theme</a>,\n    style: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/renderer/struct.Style.html\" title=\"struct cosmic::iced_winit::graphics::core::renderer::Style\">Style</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>\n)</h4></section></summary><div class=\"docblock\"><p>Draws the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a> and its children using the given <a href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\"><code>Layout</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.operate\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#120-125\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.operate\" class=\"fn\">operate</a>(\n    &amp;mut self,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    operation: &amp;mut dyn <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/widget/trait.Operation.html\" title=\"trait cosmic::iced_winit::graphics::core::widget::Operation\">Operation</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/widget/enum.OperationOutputWrapper.html\" title=\"enum cosmic::iced_winit::graphics::core::widget::OperationOutputWrapper\">OperationOutputWrapper</a>&lt;Message&gt;&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Applies a <a href=\"cosmic/iced_winit/graphics/core/widget/trait.Operation.html\" title=\"trait cosmic::iced_winit::graphics::core::widget::Operation\"><code>widget::Operation</code></a> to the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_over\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#130-135\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.is_over\" class=\"fn\">is_over</a>(\n    &amp;self,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    cursor_position: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Point.html\" title=\"struct cosmic::iced_winit::graphics::core::Point\">Point</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns true if the cursor is over the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.overlay\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/overlay/element.rs.html#140-144\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html#tymethod.overlay\" class=\"fn\">overlay</a>&lt;'b&gt;(\n    &amp;'b mut self,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'b, Message, Theme, Renderer&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the nested overlay of the <a href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\"><code>Element</code></a>, if there is any.</p>\n</div></details></div></details>",0,"cosmic::iced::overlay::Element"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CGroup%3C'a,+Message,+Theme,+Renderer%3E%3E-for-Element%3C'a,+Message,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/overlay/group.rs.html#186-191\">source</a><a href=\"#impl-From%3CGroup%3C'a,+Message,+Theme,+Renderer%3E%3E-for-Element%3C'a,+Message,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Group.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Group\">Group</a>&lt;'a, Message, Theme, Renderer&gt;&gt; for <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Message: 'a,\n    Theme: 'a,\n    Renderer: 'a + <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Renderer.html\" title=\"trait cosmic::iced_winit::graphics::core::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/overlay/group.rs.html#193\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    group: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Group.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Group\">Group</a>&lt;'a, Message, Theme, Renderer&gt;\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Group<'a, Message, Theme, Renderer>>","cosmic::iced::overlay::Element"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()