import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { User, Package, Settings, LogOut } from "lucide-react";
import { toast } from "sonner";

export function UserProfile() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-3">
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === "orders" ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted"
              }`}
            >
              <Package className="h-5 w-5" /> My Orders
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === "profile" ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted"
              }`}
            >
              <User className="h-5 w-5" /> Profile Settings
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === "settings" ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted"
              }`}
            >
              <Settings className="h-5 w-5" /> Preferences
            </button>
            <button
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-left text-error hover:bg-error/10 transition-colors mt-4"
              onClick={() => toast.success("Logged out successfully")}
            >
              <LogOut className="h-5 w-5" /> Sign Out
            </button>
          </nav>
        </aside>

        <main className="md:col-span-9">
          <div className="bg-card rounded-2xl border p-6 min-h-[400px]">
            {activeTab === "orders" && (
              <div>
                <h2 className="text-xl font-bold mb-6 border-b pb-4">Order History</h2>
                <div className="text-center py-12 text-muted-foreground">
                  <Package className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>You haven't placed any orders yet.</p>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div>
                <h2 className="text-xl font-bold mb-6 border-b pb-4">Profile Information</h2>
                <form className="max-w-md space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Profile updated"); }}>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name</label>
                    <Input defaultValue="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <Input defaultValue="john.doe@example.com" type="email" />
                  </div>
                  <Button type="submit" className="mt-4">Save Changes</Button>
                </form>
              </div>
            )}
            
            {activeTab === "settings" && (
              <div>
                <h2 className="text-xl font-bold mb-6 border-b pb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive order updates and promotions</p>
                    </div>
                    <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Dark Mode</h4>
                      <p className="text-sm text-muted-foreground">Toggle dark appearance</p>
                    </div>
                    <div className="w-10 h-6 bg-muted rounded-full relative cursor-pointer border">
                      <div className="w-4 h-4 bg-muted-foreground rounded-full absolute left-1 top-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
