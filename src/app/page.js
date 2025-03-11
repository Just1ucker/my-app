"useClient"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const dataArray = [
    {
      user: {
        id: 1,
        name: "Alice",
        settings: {
          theme: "dark",
          notifications: {
            email: {
              enabled: true,
              frequency: "daily",
              categories: {
                marketing: false,
                transactional: true,
                updates: true
              }
            },
            sms: {
              enabled: false,
              carrier: null,
              info: {
                international: false,
                local: true
              }
            },
            push: {
              enabled: true,
              sound: "default",
              options: {
                vibration: true,
                badge: true
              }
            }
          },
          privacy: {
            locationSharing: false,
            adPersonalization: true,
            blockedUsers: [
              { id: 101, name: "Bob" },
              { id: 102, name: "Charlie" }
            ],
            dataSharing: {
              thirdParty: false,
              partners: ["Partner1", "Partner2"]
            }
          }
        },
        profile: {
          bio: "Software devel   at Tech Inc.",
          contact: {
            email: "alice@example.com",
            phone: {
              countryCode: "+1",
              number: "1234567890"
            }
          },
          social: {
            twitter: "@alice",
            facebook: "alice.profile",
            linkedIn: "alice-in-tech",
            extra: {
              instagram: "alice.ig",
              github: "alicehub"
            }
          }
        },
        preferences: {
          language: "ru",
          timezone: "Europe/Moscow",
          appearance: {
            fontSize: "medium",
            layout: {
              sidebar: true,
              notificationsPanel: true,
              themeOptions: {
                color: "blue",
                darkMode: false
              }
            }
          }
        }
      }
    },
    {
      user: {
        id: 2,
        name: "Bob",
        settings: {
          theme: "light",
          notifications: {
            email: {
              enabled: false,
              frequency: "weekly",
              categories: {
                marketing: true,
                transactional: false,
                updates: true
              }
            },
            sms: {
              enabled: true,
              carrier: "Verizon",
              info: {
                international: false,
                local: true
              }
            },
            push: {
              enabled: false,
              sound: "chime",
              options: {
                vibration: false,
                badge: false
              }
            }
          },
          privacy: {
            locationSharing: true,
            adPersonalization: false,
            blockedUsers: [
              { id: 103, name: "Dave" }
            ],
            dataSharing: {
              thirdParty: true,
              partners: ["Partner3"]
            }
          }
        },
        profile: {
          bio: "Graphic designer and illustrator.",
          contact: {
            email: "bob@example.com",
            phone: {
              countryCode: "+44",
              number: "9876543210"
            }
          },
          social: {
            twitter: "@bobdesigns",
            facebook: "bob.designs",
            linkedIn: "bob-designs",
            extra: {
              instagram: "bob.art",
              github: "bobdesign"
            }
          }
        },
        preferences: {
          language: "en",
          timezone: "Europe/London",
          appearance: {
            fontSize: "large",
            layout: {
              sidebar: false,
              notificationsPanel: true,
              themeOptions: {
                color: "green",
                darkMode: true
              }
            }
          }
        }
      }
    },
    {
      user: {
        id: 3,
        name: "Charlie",
        settings: {
          theme: "dark",
          notifications: {
            email: {
              enabled: true,
              frequency: "monthly",
              categories: {
                marketing: false,
                transactional: false,
                updates: true
              }
            },
            sms: {enabled: false,
              carrier: null,
              info: {
                international: true,
                local: false
              }
            },
            push: {
              enabled: true,
              sound: "alert",
              options: {
                vibration: true,
                badge: false
              }
            }
          },
          privacy: {
            locationSharing: false,
            adPersonalization: true,
            blockedUsers: [],
            dataSharing: {
              thirdParty: false,
              partners: []
            }
          }
        },
        profile: {
          bio: "Freelance writer and blogger.",
          contact: {
            email: "charlie@example.com",
            phone: {
              countryCode: "+91",
              number: "5555555555"
            }
          },
          social: {
            twitter: "@charliewrites",
            facebook: "charlie.blog",
            linkedIn: "charlie-writer",
            extra: {
              instagram: "charlie.blog",
              github: "charliewriter"
            }
          }
        },
        preferences: {
          language: "en",
          timezone: "Asia/Kolkata",
          appearance: {
            fontSize: "small",
            layout: {
              sidebar: true,
              notificationsPanel: false,
              themeOptions: {
                color: "red",
                darkMode: false
              }
            }
          }
        }
      }
    }
  ];
  const newMemory = dataArray.map((element, index) => {
    //const user = element.user
    const userSettings = user.settings
    const userSMS = userSettings.notifications.sms.carrier
    const userBio = user.profile.bio
    const userEmail = user.profile.contact.email
    const userTimezone = user.preferences.timezone
    const userBlockedUsers = user.settings.privacy.blockedUsers
    const userCountryCode = user.profile.contact.phone.countryCode
    const userNumber = user.profile.contact.phone.number
    const userPhone = userCountryCode + userNumber
    const userPhone2 = `${userCountryCode}-${userNumber}`
    const userPhone3 = userCountryCode.concat(userNumber)
    console.log(user);
    console.log(userCountryCode.concat(userNumber));

    return {
      name: user.name,
      sms: userSMS ? userSMS : "None",
      bio: userBio,
      email: userEmail,
      timezone: userTimezone,
      blockedUsers: userBlockedUsers.length === 0 ? "No users" : userBlockedUsers,
      phone: userPhone,
      phone2: userPhone2,
      phone3: userPhone3
    }
    })

  console.log(newMemory);
  
    return <h1>Hello World!</h1>
}
