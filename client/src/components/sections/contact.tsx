import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-white/5">
      <div className="container px-6 mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8">
          Ready to scale your technical capacity?
        </h2>
        <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
          If your agency is growing and automation keeps coming up in client conversations, this is usually a good time to talk.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:abhirup@blackpanda.tech" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto h-14 px-8 text-lg bg-white text-black hover:bg-white/90 rounded-none gap-3">
                    <Mail className="w-5 h-5" />
                    abhirup@blackpanda.tech
                </Button>
            </a>
            
            <a href="#" className="w-full md:w-auto group">
                <Button variant="outline" size="lg" className="w-full md:w-auto h-14 px-8 text-lg bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white rounded-none gap-3">
                    Schedule a Conversation
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
            </a>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Black Panda Technologies.</p>
            <div className="flex gap-6 mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider">
                <span>White-Label</span>
                <span>Offshore</span>
                <span>Infrastructure</span>
            </div>
        </div>
      </div>
    </section>
  );
}
