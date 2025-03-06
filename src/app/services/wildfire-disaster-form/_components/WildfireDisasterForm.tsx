"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ROOF_MATERIALS,
  SOLAR_PV,
  EXTERIOR_SIDING_MATERIALS,
  FOUNDATION_TYPE_MATERIAL,
  WINDOWS,
} from "./constants";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  wildfire_name: z.string(),
  property_address: z.string().optional(),
  apn_number: z.string().optional(),
  square_feet: z.string(),
  additional_square_feet: z.string().optional(),
  bedrooms: z.string(),
  full_bathrooms: z.string().optional(),
  half_bathrooms: z.string().optional(),
  year_built: z.string().optional(),
  roof_materials: z.array(z.string()),
  other_roof_material: z.string().optional(),
  solar_pv: z.array(z.string()),
  solar_system_information: z.string().optional(),
  exterior_siding_materials: z.array(z.string()),
  other_exterior_siding_material: z.string().optional(),
  foundation_type_material: z.array(z.string()),
  other_foundation_type_material: z.string().optional(),
  windows: z.array(z.string()),
  other_window_type: z.string().optional(),
  other_exterior_materials_information: z.string().optional(),
  type_of_heating_system: z.string().optional(),
  date_of_heating_system: z.string().optional(),
  type_of_cooling_system: z.string().optional(),
  date_of_cooling_system: z.string().optional(),
  number_of_fireplaces: z.string().optional(),
  type_of_fireplaces: z.string().optional(),
  type_of_water_heater: z.string().optional(),
  date_of_water_heater: z.string().optional(),
  interior_condition: z.string().optional(),
  flooring: z.string().optional(),
  kitchen_cabinets: z.string().optional(),
  kitchen_countertops: z.string().optional(),
  kitchen_flooring: z.string().optional(),
  kitchen_appliances: z.string().optional(),
  special_finishes_features_kitchen: z.string().optional(),
  bathroom_cabinets: z.string().optional(),
  bathroom_countertops: z.string().optional(),
  bathroom_shower: z.string().optional(),
  bathroom_flooring: z.string().optional(),
  special_finishes_features_bathroom: z.string().optional(),
  upgrades_remodeling: z.string().optional(),
  other_special_finishes_features_interior: z.string().optional(),
  lot_size: z.string().optional(),
  power_utility_source: z.string().optional(),
  other_power_source: z.string().optional(),
  gas_utility_source: z.string().optional(),
  other_gas_source: z.string().optional(),
  water_utility_source: z.string().optional(),
  other_water_source: z.string().optional(),
  sewer_utility: z.string().optional(),
  other_sewer_utility: z.string().optional(),
  view: z.string().optional(),
  accessory_dwelling_guest_house_description: z.string().optional(),
  describe_additional_property_ammenities: z.string().optional(),
  garage_and_or_carports: z.string().optional(),
  other_exterior_improvements: z.string().optional(),
  hoa: z.string().optional(),
  other_information: z.string().optional(),
});

export function WildfireDisasterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      wildfire_name: "",
      property_address: "",
      apn_number: "",
      square_feet: "",
      additional_square_feet: "",
      bedrooms: "",
      full_bathrooms: "",
      half_bathrooms: "",
      year_built: "",
      roof_materials: [],
      other_roof_material: "",
      solar_pv: [],
      solar_system_information: "",
      exterior_siding_materials: [],
      other_exterior_siding_material: "",
      foundation_type_material: [],
      other_foundation_type_material: "",
      windows: [],
      other_window_type: "",
      other_exterior_materials_information: "",
      type_of_heating_system: "",
      date_of_heating_system: "",
      type_of_cooling_system: "",
      date_of_cooling_system: "",
      number_of_fireplaces: "",
      type_of_fireplaces: "",
      type_of_water_heater: "",
      date_of_water_heater: "",
      interior_condition: "",
      flooring: "",
      kitchen_cabinets: "",
      kitchen_countertops: "",
      kitchen_flooring: "",
      kitchen_appliances: "",
      special_finishes_features_kitchen: "",
      bathroom_cabinets: "",
      bathroom_countertops: "",
      bathroom_shower: "",
      bathroom_flooring: "",
      special_finishes_features_bathroom: "",
      upgrades_remodeling: "",
      other_special_finishes_features_interior: "",
      lot_size: "",
      power_utility_source: "",
      other_power_source: "",
      gas_utility_source: "",
      other_gas_source: "",
      water_utility_source: "",
      other_water_source: "",
      sewer_utility: "",
      other_sewer_utility: "",
      view: "",
      accessory_dwelling_guest_house_description: "",
      describe_additional_property_ammenities: "",
      garage_and_or_carports: "",
      other_exterior_improvements: "",
      hoa: "",
      other_information: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    fetch("https://formsubmit.co/ajax/kim@goldenpoppyappraisal.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "New Wildfire Form Submission",
        ...values,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setIsLoading(false);
        console.log("SUCCESS!");
        router.push("/contact/success");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        router.push("/contact/failure");
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-5xl space-y-2"
      >
        <br />
        <h2 className="text-xl">Your Information</h2>
        <div className="text-lg">
          Fields marked <span className="text-lg text-red-700">*</span> are
          required.
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  First Name <span className="text-lg text-red-700">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Last Name <span className="text-lg text-red-700">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-lg text-red-700">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Best Contact Number{" "}
                <span className="text-lg text-red-700">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="wildfire_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name of Wildfire <span className="text-lg text-red-700">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="property_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Address</FormLabel>
              <FormDescription>
                If there is no address, please let us know the APN
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apn_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                APN Number (Optional){" "}
                <Link
                  href="https://www.redfin.com/definition/apn"
                  className="text-accent"
                  target="_blank"
                >
                  What&apos;s this?
                </Link>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Main Home Details</h2>
        <hr />
        <FormField
          control={form.control}
          name="square_feet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Square Feet (Permitted Living Area){" "}
                <span className="text-lg text-red-700">*</span>
              </FormLabel>
              <FormDescription>
                Please include the size of the living area of your home. If the
                exact size is now known, please indicate "estimate." If you have
                additional square footage please answer that in the next
                question.
              </FormDescription>
              <FormControl>
                <Input {...field} placeholder="ex. 3,500 sq ft" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additional_square_feet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Additional Square Footage (Areas not included in the Permitted
                Living Area)
              </FormLabel>
              <FormDescription>
                Please explain what the square footage is (ex. Sun Room,
                Basement, non-permitted addition, etc). Also please include the
                date of construction and whether building permits were obtained.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Bedrooms <span className="text-lg text-red-700">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="studio">studio</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6+">6+</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="full_bathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Bathrooms</FormLabel>
              <FormDescription>
                Sinks, Toilet, Tub or Shower (or Both)
              </FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="half_bathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Half Bathrooms</FormLabel>
              <FormDescription>Sink and Toilet Only</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year_built"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year Built</FormLabel>
              <FormDescription>
                If the exact year built is not known, please indicate "Estimate"
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Main Home Building Materials</h2>
        <h3 className="text-lg">
          Please tell us about the materials of your home
        </h3>
        <hr />
        <FormField
          control={form.control}
          name="roof_materials"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Roof Materials</FormLabel>
                <FormDescription>Choose All That Apply</FormDescription>
              </div>
              {ROOF_MATERIALS.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="roof_materials"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.label)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.label])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.label,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_roof_material"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Roof Material</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="solar_pv"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Solar PV</FormLabel>
                <FormDescription>
                  Only check if your home has Solar
                </FormDescription>
              </div>
              {SOLAR_PV.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="solar_pv"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.label)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.label])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.label,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="solar_system_information"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Solar System Information</FormLabel>
              <FormDescription>
                Please enter details such as the size of your solar system and
                the approximate date it was installed.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="exterior_siding_materials"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">
                  Exterior Siding Materials
                </FormLabel>
                <FormDescription>Choose All That Apply</FormDescription>
              </div>
              {EXTERIOR_SIDING_MATERIALS.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="exterior_siding_materials"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.label)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.label])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.label,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_exterior_siding_material"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Exterior Siding Material</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="foundation_type_material"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">
                  Foundation Type/Material
                </FormLabel>
                <FormDescription>Choose All That Apply</FormDescription>
              </div>
              {FOUNDATION_TYPE_MATERIAL.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="foundation_type_material"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.label)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.label])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.label,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_foundation_type_material"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Foundation Type/Material</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="windows"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Windows</FormLabel>
                <FormDescription>Choose All That Apply</FormDescription>
              </div>
              {WINDOWS.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="windows"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.label)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.label])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.label,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_window_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Window Type and Date of Replacement</FormLabel>
              <FormDescription>
                Date of replacement can be estimated
              </FormDescription>
              <FormControl>
                <Input {...field} placeholder="ex. Windows replaced in 2014" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_exterior_materials_information"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Exterior Materials Information</FormLabel>
              <FormDescription>
                Is there anything else the appraiser should know about the
                exterior materials?
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="ex. exterior logs hand hewn from timber on property"
                  // className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Building Components</h2>
        <hr />
        <FormField
          control={form.control}
          name="type_of_heating_system"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Heating System</FormLabel>
              <FormDescription>
                Please List All Types - Common types of Heating include: central
                heat, mini split system, tall wall heater, small wall heater,
                gas fireplace/stove, wood stove, radiant floor heat, etc.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date_of_heating_system"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date Heating System Was Replaced/Installed</FormLabel>
              <FormDescription>Date can be estimated</FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type_of_cooling_system"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Cooling System</FormLabel>
              <FormDescription>
                Please List All Types - Common Types of Heating include: central
                air, mini split system, window a/c, small wall a/c, evaporative
                cooler (swamp cooler), whole house fan, etc.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date_of_cooling_system"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date Cooling System Was Replaced/Installed</FormLabel>
              <FormDescription>Date can be estimated</FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number_of_fireplaces"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Fireplaces/Woodstoves</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type_of_fireplaces"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Fireplaces/Woodstoves</FormLabel>
              <FormDescription>
                Please Describe the Type/Fuel. Common Types of Fireplace
                include: free standing wood fireplace, wood fireplace insert,
                woodstove, gas stove, gas fireplace, etc.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type_of_water_heater"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Water Heater</FormLabel>
              <FormDescription>
                Please List All Types - Common Types of Water Heaters include:
                Tank, Tankless (On Demand), Point of Use (Under sink), Heat
                Pump, etc.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date_of_water_heater"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date Water Heater Replaced/Installed</FormLabel>
              <FormDescription>Date can be estimated</FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Interior Room Descriptions and Features</h2>
        <hr />
        <FormField
          control={form.control}
          name="interior_condition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Overall Condition of the Interior</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="average">Average</SelectItem>
                  <SelectItem value="aboveAverage">Above Average</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="new">
                    New (Home Built Less than 1 Yr Ago)
                  </SelectItem>
                </SelectContent>
              </Select>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="flooring"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Flooring In Living Area and Bedrooms</FormLabel>
              <FormDescription>
                List all materials used and the date of replacement (if
                applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Kitchen Features</h2>
        <hr />
        <FormField
          control={form.control}
          name="kitchen_cabinets"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kitchen Cabinets</FormLabel>
              <FormDescription>
                List all materials used and date of replacement (if applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="kitchen_countertops"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kitchen Countertops</FormLabel>
              <FormDescription>
                List all materials used and date of replacement (if applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="kitchen_flooring"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kitchen Flooring</FormLabel>
              <FormDescription>
                List all materials used and date of replacement (if applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="kitchen_appliances"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kitchen Appliances</FormLabel>
              <FormDescription>
                List all built-in appliances and date of replacement (if
                applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="special_finishes_features_kitchen"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Finishes/Features</FormLabel>
              <FormDescription>
                Include any additional amenities or features not previously
                described
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Bathroom Features</h2>
        <hr />
        <FormField
          control={form.control}
          name="bathroom_cabinets"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bathroom Cabinets/Vanity</FormLabel>
              <FormDescription>
                List all materials used and date of replacement (if applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bathroom_countertops"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bathroom Countertops</FormLabel>
              <FormDescription>
                List all materials used and date of replacement (if applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bathroom_shower"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bathroom Shower and/or Bath Surround</FormLabel>
              <FormDescription>
                List all materials used and date of replacement (if applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bathroom_flooring"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bathroom Flooring</FormLabel>
              <FormDescription>
                List all materials used and date of replacement (if applicable)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="special_finishes_features_bathroom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Finishes/Features</FormLabel>
              <FormDescription>
                Include any additional amenities or features not previously
                described
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Other Interior Features</h2>
        <hr />
        <FormField
          control={form.control}
          name="upgrades_remodeling"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upgrades/Remodeling</FormLabel>
              <FormDescription>
                Describe any other upgrades or remodeling and estimated date of
                completion that you have not already included in previous
                answers
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_special_finishes_features_interior"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Special Finishes/Features</FormLabel>
              <FormDescription>
                Include special finishes or features not included above (for
                example, built-in cabinets, sound systems, vaulted and/or open
                beam ceilings, etc)
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Property Features</h2>
        <hr />
        <FormField
          control={form.control}
          name="lot_size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lot Size</FormLabel>
              <FormDescription>
                If the exact size is not known please indicate "Estimate"
              </FormDescription>
              <FormControl>
                <Input
                  {...field}
                  placeholder="ex. 10,000 sq ft or 4.65 acres"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="power_utility_source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Power Utility Source</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="public/pg&e">Public/PG&E</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_power_source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Power Source</FormLabel>
              <FormControl>
                <Input {...field} placeholder="ex. Off Grid Solar/Generator" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gas_utility_source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gas Utility Source</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="publicNaturalGas">
                    Public/Natural Gas
                  </SelectItem>
                  <SelectItem value="propane">Propane</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_gas_source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Gas Source</FormLabel>
              <FormControl>
                <Input {...field} placeholder="ex. Kerosene" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="water_utility_source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Water Utility Source</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="public">
                    Public Provided Treated Water
                  </SelectItem>
                  <SelectItem value="privateWell">Private Well</SelectItem>
                  <SelectItem value="sharedWell">Shared Well</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_water_source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Water Source</FormLabel>
              <FormControl>
                <Input {...field} placeholder="ex. spring" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sewer_utility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sewer Utility</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="public_sewer">Public Sewer</SelectItem>
                  <SelectItem value="private_septic_system">
                    Private Septic System
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_sewer_utility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Sewer Utility</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="view"
          render={({ field }) => (
            <FormItem>
              <FormLabel>View</FormLabel>
              <FormDescription>
                Describe the view (Example: Typical Residential, Mountains,
                Lake, or River, etc.)
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="accessory_dwelling_guest_house_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Accessory Dwelling/Guest House Description</FormLabel>
              <FormDescription>
                Please describe the following: approximate size, bedroom and
                bathroom count, year built, attached or detached to the main
                home, did it have a full kitchen or kitchenette, was it
                completed with building permits, etc
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="describe_additional_property_ammenities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe Additional Property Ammenities</FormLabel>
              <FormDescription>
                Examples: workshop, outbuildings, pool, studio, outdoor kitchen,
                tennis court, barn, horse amenities, other noteworthy
                improvements, etc. Please indicate estimated size if applicable.
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="garage_and_or_carports"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Garage and/or Carports</FormLabel>
              <FormDescription>
                Please include the number of cars and if it was attached or
                detached
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other_exterior_improvements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Exterior Improvements</FormLabel>
              <FormDescription>
                Describe any decks, patios, driveways, walkways, landscaping,
                etc.
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Home Owners Association</h2>
        <hr />
        <FormField
          control={form.control}
          name="hoa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>If you had/have an HOA</FormLabel>
              <FormDescription>
                Provide the name of the association, the amount of dues and
                frequency, and what is included int he dues (common amenities,
                maintenance, road maintenance, etc)
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-xl">Other Information</h2>
        <hr />
        <FormField
          control={form.control}
          name="other_information"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Is there anything else you want the appraiser to know that may
                help with the valuation of the property?
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="h-10 w-20 bg-primary text-secondary hover:bg-primaryHover"
        >
          {isLoading ? (
            <TailSpin
              visible={true}
              height="20"
              width="20"
              color="var(--accent)"
              ariaLabel="tail-spin-loading"
              radius="0"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
