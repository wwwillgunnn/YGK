import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

// TODO: give this page real functionality
export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT - Profile Summary */}
          <Card className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-center text-white">
            {/* Avatar */}
            <div className="w-28 h-28 mx-auto rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center text-3xl font-semibold">
              JD
            </div>

            <h2 className="mt-6 text-xl font-semibold">John Doe</h2>
            <p className="text-white/60 mt-1">JohnDoe@example.com</p>

            <button className="mt-6 w-full bg-white text-green-900 font-semibold py-2.5 rounded-2xl hover:bg-white/90 transition">
              Edit Profile
            </button>

            <div className="mt-8 text-left space-y-3 text-sm text-white/70">
              <p>
                <span className="text-white/90">Member since:</span> Jan 2025
              </p>
              <p>
                <span className="text-white/90">Orders:</span> 12
              </p>
              <p>
                <span className="text-white/90">Saved Addresses:</span> 2
              </p>
            </div>
          </Card>

          {/* RIGHT - Editable Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Info */}
            <Card className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-white">
              <h3 className="text-lg font-semibold mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassInput label="First Name" placeholder="John" />
                <GlassInput label="Last Name" placeholder="Doe" />
              </div>

              <GlassInput
                label="Email Address"
                placeholder="JohnDoe@example.com"
              />
              <GlassInput label="Phone Number" placeholder="+61 400 000 000" />
            </Card>

            {/* Address */}
            <Card className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-white">
              <h3 className="text-lg font-semibold mb-6">Default Address</h3>

              <GlassInput
                label="Street Address"
                placeholder="123 Main Street"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassInput label="City" placeholder="Canberra" />
                <GlassInput label="State" placeholder="ACT" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassInput label="Postcode" placeholder="2601" />
                <GlassInput label="Country" placeholder="Australia" />
              </div>

              <button className="mt-6 bg-white text-green-900 font-semibold py-2.5 px-6 rounded-2xl hover:bg-white/90 transition">
                Save Changes
              </button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

function GlassInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/80 mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border border-white/20
          bg-white/5
          px-4 py-3
          text-white
          placeholder-white/40
          backdrop-blur-md
          focus:outline-none
          focus:ring-2
          focus:ring-white/40
          transition
        "
      />
    </div>
  );
}
