def camel_case?(str)
  str =~ /^[A-Z][a-zA-Z]*$/
end

def create_folder(path)
  Dir.mkdir(path) unless Dir.exist?(path)
end

def create_file(path, content)
  File.open(path, "w") { |file| file.puts content }
end

def get_domain_name
  print "Provide a name for your domain in CamelCase: "
  gets.chomp
end

def validate_domain_name(name)
  unless camel_case?(name)
    puts "Domain name must be in CamelCase. Please provide a valid name."
    exit
  end

  if Dir.exist?("src/domain/#{name}")
    puts "The domain #{name} already exists. Please provide a different name."
    exit
  end
end

def create_domain_files(name, folder, name_downcase)
  adapter_file_content = <<~HEREDOC
  import {#{name}, #{name}API} from './#{name_downcase}Types';

  const to#{name} = (#{name_downcase}API: #{name}API): #{name} => {
    return {};
  };

  export const #{name}Adapter = {
    to#{name},
  };
  HEREDOC
  create_file("#{folder}/#{name_downcase}Adapter.ts", adapter_file_content)

  api_file_content = <<~HEREDOC
  import {api} from '@api';

  export const #{name_downcase}API = {};
  HEREDOC
  create_file("#{folder}/#{name_downcase}Api.ts", api_file_content)

  service_file_content = <<~HEREDOC
  import {#{name}API} from './#{name_downcase}Types';

  export const #{name_downcase}Service = {};
  HEREDOC
  create_file("#{folder}/#{name_downcase}Service.ts", service_file_content)

  types_file_content = <<~HEREDOC
  export interface #{name}API {}

  export interface #{name} {}
  HEREDOC
  create_file("#{folder}/#{name_downcase}Types.ts", types_file_content)
end

def create_domain
  domain_name = get_domain_name
  validate_domain_name(domain_name)

  domain_name_downcase = domain_name.sub(/^(.)/) { $1.downcase }

  domain_folder = "src/domain/#{domain_name}"
  create_folder(domain_folder)

  create_domain_files(domain_name, domain_folder, domain_name_downcase)

  domain_usecase_folder = "#{domain_folder}/useCases"
  create_folder(domain_usecase_folder)

  puts "Domain #{domain_name} created successfully in #{domain_folder}."
end

create_domain