use cosmic::{
    widget::{
        button,
        icon,
        list_item,
        list_section,
        list_view,
        nav_bar,
        toggler,
    },
    settings,
    iced::{theme, Alignment, Color, Element, Length, Sandbox, Theme},
    iced::widget::{
        checkbox, container, horizontal_space, progress_bar, radio,
        row, slider, text,
        vertical_space,
    },
};

pub fn main() -> cosmic::iced::Result {
    Window::run(settings())
}


#[derive(Default)]
struct Window {
    page: u8,
    debug: bool,
    theme: Theme,
    slider_value: f32,
    checkbox_value: bool,
    toggler_value: bool,
}

#[derive(Debug, Clone)]
enum Message {
    Page(u8),
    Debug(bool),
    ThemeChanged(Theme),
    ButtonPressed,
    SliderChanged(f32),
    CheckboxToggled(bool),
    TogglerToggled(bool),
}

impl Sandbox for Window {
    type Message = Message;

    fn new() -> Self {
        let mut window = Window::default();
        window.slider_value = 50.0;
        window
    }

    fn title(&self) -> String {
        String::from("COSMIC Design System - Iced")
    }

    fn update(&mut self, message: Message) {
        match message {
            Message::Page(page) => self.page = page,
            Message::Debug(debug) => self.debug = debug,
            Message::ThemeChanged(theme) => self.theme = theme,
            Message::ButtonPressed => {}
            Message::SliderChanged(value) => self.slider_value = value,
            Message::CheckboxToggled(value) => self.checkbox_value = value,
            Message::TogglerToggled(value) => self.toggler_value = value,
        }
    }

    fn view(&self) -> Element<Message> {
        let sidebar: Element<_> = nav_bar!(
            //TODO: Support symbolic icons
            button!(
                icon("network-wireless", 16),
                text("Wi-Fi"),
                horizontal_space(Length::Fill),
            )
            .on_press(Message::Page(0))
            .style(if self.page == 0 { theme::Button::Primary } else { theme::Button::Text })
            ,
            button!(
                icon("preferences-desktop", 16),
                text("Desktop"),
                horizontal_space(Length::Fill),
            )
            .on_press(Message::Page(1))
            .style(if self.page == 1 { theme::Button::Primary } else { theme::Button::Text })
            ,
            button!(
                icon("system-software-update", 16),
                text("OS Upgrade & Recovery"),
                horizontal_space(Length::Fill),
            )
            .on_press(Message::Page(2))
            .style(if self.page == 2 { theme::Button::Primary } else { theme::Button::Text })
            ,
            vertical_space(Length::Fill),
        )
        .into();

        let choose_theme = [Theme::Light, Theme::Dark].iter().fold(
            row![text("Debug theme:")].spacing(10).align_items(Alignment::Center),
            |row, theme| {
                row.push(radio(
                    format!("{:?}", theme),
                    *theme,
                    Some(self.theme),
                    Message::ThemeChanged,
                ))
            },
        );

        let content: Element<_> = list_view!(
            list_section!(
                "Debug",
                choose_theme,
                toggler(
                    String::from("Debug layout"),
                    self.debug,
                    Message::Debug,
                )
            ),
            list_section!(
                "Buttons",
                row!(
                    button!("Primary")
                        .style(theme::Button::Primary)
                        .on_press(Message::ButtonPressed)
                    ,
                    button!("Secondary")
                        .style(theme::Button::Secondary)
                        .on_press(Message::ButtonPressed)
                    ,
                    button!("Positive")
                        .style(theme::Button::Positive)
                        .on_press(Message::ButtonPressed)
                    ,
                    button!("Destructive")
                        .style(theme::Button::Destructive)
                        .on_press(Message::ButtonPressed)
                    ,
                    button!("Text")
                        .style(theme::Button::Text)
                        .on_press(Message::ButtonPressed)
                    ,
                ).spacing(12),
                row!(
                    button!("Primary")
                        .style(theme::Button::Primary)
                        .padding([8, 16])
                    ,
                    button!("Secondary")
                        .style(theme::Button::Secondary)
                        .padding([8, 16])
                    ,
                    button!("Positive")
                        .style(theme::Button::Positive)
                        .padding([8, 16])
                    ,
                    button!("Destructive")
                        .style(theme::Button::Destructive)
                        .padding([8, 16])
                    ,
                    button!("Text")
                        .style(theme::Button::Text)
                        .padding([8, 16])
                    ,
                ).spacing(12),
            ),
            list_section!(
                "Controls",
                list_item!(
                    "Toggler",
                    toggler(None, self.toggler_value, Message::TogglerToggled)
                ),
                list_item!(
                    "Slider",
                    slider(0.0..=100.0, self.slider_value, Message::SliderChanged)
                        .width(Length::Units(250))
                ),
                list_item!(
                    "Progress",
                    progress_bar(0.0..=100.0, self.slider_value)
                        .width(Length::Units(250))
                        .height(Length::Units(4))
                ),
                checkbox("Checkbox", self.checkbox_value, Message::CheckboxToggled),
            )
        )
        .into();

        container(row![
            if self.debug { sidebar.explain(Color::WHITE) } else { sidebar },
            horizontal_space(Length::Fill),
            if self.debug { content.explain(Color::WHITE) } else { content },
            horizontal_space(Length::Fill),
        ])
        .padding([16, 8])
        .width(Length::Fill)
        .height(Length::Fill)
        .into()
    }

    fn theme(&self) -> Theme {
        self.theme
    }
}