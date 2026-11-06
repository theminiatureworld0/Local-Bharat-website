"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  User, 
  MapPin, 
  Edit3, 
  ShoppingBag, 
  Calendar, 
  FileText, 
  Heart, 
  Briefcase, 
  Store, 
  ChevronRight, 
  ChevronDown,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Mail
} from "lucide-react";
import Button from "@/components/common/Button";

export default function CustomerAccountPage() {
  const [activeTab, setActiveTab] = useState("overview"); // overview, enquiries, orders, bookings
  const [isEditing, setIsEditing] = useState(false);
  const [location, setLocation] = useState("Mansarovar, Jaipur (10 km)");
  const [showLocationModal, setShowLocationModal] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "AK",
    email: "rushikeshyerme321@gmail.com",
    phone: "+91 7385237358",
    locality: "Mansarovar, Jaipur",
  });

  const availableLocations = [
    "Mansarovar, Jaipur (10 km)",
    "Malviya Nagar, Jaipur (14 km)",
    "Vaishali Nagar, Jaipur (8 km)",
    "Sanganer, Jaipur (12 km)",
    "Pune, Maharashtra",
    "Nashik, Maharashtra"
  ];

  const recentEnquiries = [
    {
      id: "ENQ-8821",
      title: "Boundary Wall & MS Sliding Gate Fabrication",
      vendor: "Vishwakarma Metal & Civil Works",
      date: "Nov 04, 2026",
      status: "3 Quotations Received",
      statusColor: "text-[#B5532F] bg-[#B5532F]/10 border-[#B5532F]/30",
      budget: "₹80,000 - ₹95,000",
    },
    {
      id: "ENQ-8794",
      title: "Custom 3-Ply Printed Shipping Cartons (500 pcs)",
      vendor: "Bharat Print & Pack Solutions",
      date: "Oct 28, 2026",
      status: "Accepted & In Production",
      statusColor: "text-[#5E7F6E] bg-[#5E7F6E]/10 border-[#5E7F6E]/30",
      budget: "₹18,500",
    },
    {
      id: "ENQ-8650",
      title: "Handcrafted Sandstone Pooja Mandir (4.5 ft)",
      vendor: "Shree Ganesh Stone Arts",
      date: "Oct 15, 2026",
      status: "Delivered & Completed",
      statusColor: "text-[#5E7F6E] bg-[#5E7F6E]/10 border-[#5E7F6E]/30",
      budget: "₹52,000",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3E9DC] py-6 sm:py-10">
      <div className="max-w-md sm:max-w-xl mx-auto px-4 space-y-4">

        {/* 1. Profile Header Card (Exact UI from user screenshot) */}
        <div className="bg-[#FBF6EE] rounded-3xl p-5 border border-[#E4D3BD] shadow-parchment-soft space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3.5">
              {/* Avatar circle in Terracotta #B5532F */}
              <div className="w-14 h-14 rounded-full bg-[#B5532F] text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
                <User className="w-7 h-7 text-white stroke-[2]" />
              </div>

              <div>
                <h1 className="font-serif text-lg font-bold text-[#2E1A12] leading-none mb-1">
                  {userInfo.name}
                </h1>
                <p className="text-xs text-[#7B5C4B] font-light">
                  {userInfo.email}
                </p>
                <p className="text-xs text-[#7B5C4B] font-light">
                  {userInfo.phone}
                </p>
              </div>
            </div>

            {/* Edit button */}
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-[#D8A97C] text-[#B5532F] bg-[#FBF6EE] hover:bg-[#F3E9DC] text-xs font-medium transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          </div>

          {/* Edit Form Modal/Drawer if clicked */}
          {isEditing && (
            <div className="pt-3 border-t border-[#E4D3BD] space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  placeholder="Your Name"
                  className="px-3 py-1.5 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] text-xs text-[#2E1A12]"
                />
                <input
                  type="text"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                  placeholder="Phone"
                  className="px-3 py-1.5 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] text-xs text-[#2E1A12]"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="w-full py-1.5 bg-[#B5532F] text-white text-xs font-semibold rounded-lg"
              >
                Save Details
              </button>
            </div>
          )}

          {/* Location Badge Pill */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowLocationModal(!showLocationModal)}
              className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#F3E9DC] border border-[#E4D3BD] text-xs text-[#2E1A12] hover:bg-[#EBDDCB] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B5532F]" />
                <span className="font-medium">{location}</span>
              </div>
              <span className="text-[#B5532F] text-xs font-medium flex items-center gap-0.5">
                Change ▾
              </span>
            </button>

            {showLocationModal && (
              <div className="mt-2 p-2 bg-[#FBF6EE] rounded-xl border border-[#E4D3BD] shadow-sm space-y-1">
                {availableLocations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setLocation(loc);
                      setShowLocationModal(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center justify-between ${
                      location === loc ? "bg-[#B5532F]/10 text-[#B5532F] font-semibold" : "text-[#2E1A12] hover:bg-[#F3E9DC]"
                    }`}
                  >
                    <span>{loc}</span>
                    {location === loc && <span className="text-xs">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 2. Vendor Invitation Card (Exact UI from user screenshot) */}
        <div className="bg-[#FBF6EE] rounded-3xl p-5 border border-[#E4D3BD] shadow-parchment-soft">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#F3E9DC] border border-[#E4D3BD] text-[#B5532F] flex items-center justify-center flex-shrink-0">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#B5532F] block">
                  CUSTOMER ACCOUNT
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#2E1A12] leading-tight">
                  List Your Store on Local Bharat
                </h3>
                <p className="text-[11px] text-[#7B5C4B] font-light leading-tight mt-0.5 max-w-xs">
                  Register your business to start receiving direct customer leads
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl bg-[#B5532F] hover:bg-[#D9743F] text-white text-xs font-semibold shadow-xs flex items-center gap-1 flex-shrink-0 transition-transform active:translate-y-[1px]"
            >
              <span>Join</span>
              <span>🚀</span>
            </Link>
          </div>
        </div>

        {/* 3. Customer Activity & Settings Heading */}
        <div className="pt-2">
          <h2 className="font-serif text-base font-bold text-[#2E1A12] mb-3">
            Customer Activity &amp; Settings
          </h2>

          {/* List of Action Items */}
          <div className="bg-[#FBF6EE] rounded-3xl border border-[#E4D3BD] shadow-parchment-soft overflow-hidden divide-y divide-[#E4D3BD]">
            
            {/* Item 1: My Orders & Store Purchases */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === "orders" ? "overview" : "orders")}
              className="w-full p-4 flex items-center justify-between gap-3 hover:bg-[#F3E9DC]/60 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F3E9DC] text-[#B5532F] border border-[#E4D3BD] flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2E1A12]">
                    My Orders &amp; Store Purchases
                  </h4>
                  <p className="text-[11px] text-[#7B5C4B] font-light">
                    Track active product orders and local deliveries
                  </p>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 text-[#7B5C4B] transition-transform ${activeTab === "orders" ? "rotate-90 text-[#B5532F]" : ""}`} />
            </button>

            {/* Sub-panel for Orders */}
            {activeTab === "orders" && (
              <div className="p-4 bg-[#F3E9DC]/40 space-y-2.5">
                <div className="p-3 bg-[#FBF6EE] rounded-xl border border-[#E4D3BD] text-xs space-y-1">
                  <div className="flex justify-between font-semibold text-[#2E1A12]">
                    <span>ORD-3910 • 500 Corrugated Boxes</span>
                    <span className="text-[#5E7F6E]">In Transit</span>
                  </div>
                  <p className="text-[11px] text-[#7B5C4B]">Vendor: Bharat Print &amp; Pack Solutions (Mansarovar)</p>
                  <p className="text-[10px] text-[#7B5C4B]">Local delivery vehicle assigned &bull; ETA Today 5:00 PM</p>
                </div>
              </div>
            )}

            {/* Item 2: My Doorstep Bookings */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === "bookings" ? "overview" : "bookings")}
              className="w-full p-4 flex items-center justify-between gap-3 hover:bg-[#F3E9DC]/60 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F3E9DC] text-[#B5532F] border border-[#E4D3BD] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2E1A12]">
                    My Doorstep Bookings
                  </h4>
                  <p className="text-[11px] text-[#7B5C4B] font-light">
                    View technician appointments &amp; scheduled slots
                  </p>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 text-[#7B5C4B] transition-transform ${activeTab === "bookings" ? "rotate-90 text-[#B5532F]" : ""}`} />
            </button>

            {/* Sub-panel for Bookings */}
            {activeTab === "bookings" && (
              <div className="p-4 bg-[#F3E9DC]/40 space-y-2.5">
                <div className="p-3 bg-[#FBF6EE] rounded-xl border border-[#E4D3BD] text-xs space-y-1">
                  <div className="flex justify-between font-semibold text-[#2E1A12]">
                    <span>Doorstep Wiring Diagnostics</span>
                    <span className="text-[#B5532F]">Confirmed Slot</span>
                  </div>
                  <p className="text-[11px] text-[#7B5C4B]">CityCare Technical Services &bull; Tomorrow 11:00 AM</p>
                  <p className="text-[10px] text-[#7B5C4B]">Technician: Ramesh Kumar (Aadhaar Verified)</p>
                </div>
              </div>
            )}

            {/* Item 3: My Enquiries & Quotations */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === "enquiries" ? "overview" : "enquiries")}
              className="w-full p-4 flex items-center justify-between gap-3 hover:bg-[#F3E9DC]/60 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F3E9DC] text-[#B5532F] border border-[#E4D3BD] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2E1A12]">
                    My Enquiries &amp; Quotations
                  </h4>
                  <p className="text-[11px] text-[#7B5C4B] font-light">
                    Review custom price proposals and accept estimates
                  </p>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 text-[#7B5C4B] transition-transform ${activeTab === "enquiries" ? "rotate-90 text-[#B5532F]" : ""}`} />
            </button>

            {/* Sub-panel for Enquiries */}
            {activeTab === "enquiries" && (
              <div className="p-4 bg-[#F3E9DC]/40 space-y-2.5">
                {recentEnquiries.map((enq) => (
                  <div key={enq.id} className="p-3 bg-[#FBF6EE] rounded-xl border border-[#E4D3BD] text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#7B5C4B]">{enq.id} • {enq.date}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${enq.statusColor}`}>
                        {enq.status}
                      </span>
                    </div>
                    <h5 className="font-semibold text-[#2E1A12] text-xs">{enq.title}</h5>
                    <div className="flex items-center justify-between pt-1 border-t border-[#E4D3BD] text-[11px]">
                      <span className="text-[#7B5C4B]">Vendor: {enq.vendor}</span>
                      <span className="font-semibold text-[#2E1A12]">{enq.budget}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Item 4: Saved Businesses & Favorites */}
            <Link
              href="/collections"
              className="w-full p-4 flex items-center justify-between gap-3 hover:bg-[#F3E9DC]/60 transition-colors text-left"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F3E9DC] text-[#B5532F] border border-[#E4D3BD] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2E1A12]">
                    Saved Businesses &amp; Favorites
                  </h4>
                  <p className="text-[11px] text-[#7B5C4B] font-light">
                    Quick access to bookmarked places
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#7B5C4B]" />
            </Link>

            {/* Item 5: My Job Applications */}
            <div className="w-full p-4 flex items-center justify-between gap-3 hover:bg-[#F3E9DC]/60 transition-colors text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F3E9DC] text-[#B5532F] border border-[#E4D3BD] flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2E1A12]">
                    My Job Applications
                  </h4>
                  <p className="text-[11px] text-[#7B5C4B] font-light">
                    Track application status with employers
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-[#7B5C4B] bg-[#F3E9DC] px-2 py-0.5 rounded">
                0 Active
              </span>
            </div>

            {/* Item 6: List Your Business on Local Bharat */}
            <Link
              href="/contact"
              className="w-full p-4 flex items-center justify-between gap-3 hover:bg-[#F3E9DC]/60 transition-colors text-left"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F3E9DC] text-[#B5532F] border border-[#E4D3BD] flex items-center justify-center flex-shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2E1A12]">
                    List Your Business on Local Bharat
                  </h4>
                  <p className="text-[11px] text-[#7B5C4B] font-light">
                    Get verified &amp; receive direct local customer leads
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#7B5C4B]" />
            </Link>

            {/* Item 7: Saved Addresses */}
            <div className="w-full p-4 flex items-center justify-between gap-3 hover:bg-[#F3E9DC]/60 transition-colors text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F3E9DC] text-[#B5532F] border border-[#E4D3BD] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2E1A12]">
                    Saved Addresses
                  </h4>
                  <p className="text-[11px] text-[#7B5C4B] font-light">
                    Mansarovar, Sector 7, Jaipur &bull; Home
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-[#5E7F6E] bg-[#5E7F6E]/10 border border-[#5E7F6E]/30 px-2 py-0.5 rounded font-medium">
                1 Saved
              </span>
            </div>

          </div>
        </div>

        {/* Back to Home & Direct Concierge */}
        <div className="pt-2 flex items-center justify-between text-xs text-[#7B5C4B]">
          <Link href="/" className="text-[#B5532F] hover:underline font-medium">
            &larr; Back to Local Bharat Marketplace
          </Link>
          <span>Local Bharat v3.0</span>
        </div>

      </div>
    </div>
  );
}
