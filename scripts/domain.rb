def camel_case?(str)
  return false if str !~ /^[A-Z][a-zA-Z]*$/
  words = str.split(/(?=[A-Z])/)
  words.all? { |word| word =~ /^[A-Z][a-z]*$/ }
end

print "Provide a name for your domain in CamelCase: "
domain_name = gets.chomp
domain_name_downcase = domain_name.sub(/^(.)/) { $1.downcase }

unless camel_case?(domain_name)
    puts "Domain name must be in CamelCase. Please provide a valid name."
    exit
end

domain_folder = "src/domain/#{domain_name}"
if Dir.exist?(domain_folder)
    puts "The domain #{domain_name} already exists. Please provide a different name."
    exit
end

Dir.mkdir(domain_folder)

domain_adapter_file = "#{domain_folder}/#{domain_name_downcase}Adapter.ts"
  File.open(domain_adapter_file, "w") do |file|
      file.puts "import {#{domain_name}, #{domain_name}API} from './#{domain_name_downcase}Types';"
      file.puts ""
      file.puts "const to#{domain_name} = (#{domain_name_downcase}API: #{domain_name}API): #{domain_name} => {"
      file.puts "  return {};"
      file.puts "};"
      file.puts ""
      file.puts "export const #{domain_name}Adapter = {"
      file.puts "  to#{domain_name},"
      file.puts "};"
          
  end
  
domain_api_file = "#{domain_folder}/#{domain_name_downcase}Api.ts"
  File.open(domain_api_file, "w") do |file|
      file.puts "import {api} from '@api';"
      file.puts ""
      file.puts "export const #{domain_name_downcase}API = {};"
  end

domain_service_file = "#{domain_folder}/#{domain_name_downcase}Service.ts"
  File.open(domain_service_file, "w") do |file|
      file.puts "import {#{domain_name}API} from './#{domain_name_downcase}Types';"
      file.puts ""
      file.puts "export const #{domain_name_downcase}Service = {};"
  end

domain_types_file = "#{domain_folder}/#{domain_name_downcase}Types.ts"
  File.open(domain_types_file, "w") do |file|
      file.puts "export interface #{domain_name}API {}"
      file.puts ""
      file.puts "export interface #{domain_name} {}"
  end

domain_usecase_folder = "#{domain_folder}/useCases"

Dir.mkdir(domain_usecase_folder)

domain_index_file = "src/domain/index.ts"

content = [
  "export {#{domain_name_downcase}Adapter} from './#{domain_name_downcase}Adapter';",
  "export {#{domain_name_downcase}Api} from './#{domain_name_downcase}Api';",
  "export {#{domain_name_downcase}Service} from './#{domain_name_downcase}Service';",
  "export type {#{domain_name}, #{domain_name}API} from './#{domain_name_downcase}Types';"
]


File.open(domain_index_file, "a") do |file| 
  content.each { |line| file.puts(line) }
end