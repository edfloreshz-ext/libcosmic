#[cfg(feature = "desktop")]
use std::collections::BTreeMap;

#[cfg(feature = "desktop")]
#[derive(Debug, Default, Clone, derive_setters::Setters)]
#[setters(prefix = "set_", into, strip_option)]
pub struct About {
    /// The application's name.
    pub application_name: Option<String>,
    /// The application's icon name.
    pub application_icon: Option<String>,
    /// Artists who contributed to the application.
    pub artists: BTreeMap<String, String>,
    /// Comments about the application.
    pub comments: Option<String>,
    /// The application's copyright.
    pub copyright: Option<String>,
    /// Designers who contributed to the application.
    pub designers: BTreeMap<String, String>,
    /// Name of the application's developer.
    pub developer_name: Option<String>,
    /// Developers who contributed to the application.
    pub developers: BTreeMap<String, String>,
    /// Documenters who contributed to the application.
    pub documenters: BTreeMap<String, String>,
    /// The license text.
    pub license: Option<String>,
    /// The license from a list of known licenses.
    pub license_type: Option<String>,
    /// The URL of the application’s support page.
    pub support_url: Option<String>,
    /// The URL of the application’s repository.
    pub repository_url: Option<String>,
    /// Translators who contributed to the application.
    pub translators: BTreeMap<String, String>,
    /// The application’s version.
    pub version: Option<String>,
    /// The application’s website.
    pub website: Option<String>,
}
