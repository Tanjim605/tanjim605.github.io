import {Sparkles, Linkedin, Facebook, Twitter, Github } from "lucide-react"

export default function Footer() {

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/kazi-tanjimul-islam-9a9464234/", icon: Linkedin },
    { name: "Facebook", href: "https://github.com/Tanjim605", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
  ];
  return (
    <footer id="contact" className="bg-slate-900 dark:bg-black text-slate-300 pt-16 pb-8 rounded-t-3xl md:rounded-t-[50px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo, Nav, Social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex-shrink-0 flex items-center">
            <Sparkles className="h-8 w-auto text-lime-400 mr-2" />
            <span className="font-bold text-2xl text-white">Positivus</span>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-slate-400 hover:text-lime-400 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Row: Contact Info and Newsletter */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="inline-block bg-lime-400 text-slate-900 px-3 py-1 rounded-md text-sm font-semibold mb-4">
              Contact me:
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:tanjimulislam2001@gmail.com"
                  className="hover:text-lime-400"
                >
                  tanjimulislam2001@gmail.com
                </a>
              </li>
              {/* <li>
                Phone:{" "}
                <a href="tel:555-567-8901" className="hover:text-lime-400">
                  555-567-8901
                </a>
              </li> */}
              {/* <li>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </li> */}
            </ul>
          </div>

        </div>

        {/* Bottom Row: Copyright and Privacy */}
        <div className="border-t border-slate-700 dark:border-slate-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Kazi Tanjimul Islam. All Rights Reserved.
          </p>
          <a href="#" className="hover:text-lime-400 mt-2 md:mt-0">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
